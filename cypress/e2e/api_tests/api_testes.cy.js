describe('Advantage Online Shopping API Tests', () => {
  let userId;
  let authToken;

  before(() => {
    cy.fixture('api_setup').then((setup) => {
      userId = setup.userId;
      authToken = setup.authToken;
    });
  });

  it('Deve procurar um produto e verificar se a lista exibe somente produtos conforme sua busca', () => {
    const searchTerm = 'tablets';
    cy.request({
      method: 'GET',
      url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/search?search=${searchTerm}`
    }).then(response => {
      expect(response.status).to.eq(200);
      response.body.products.forEach(product => {
        expect(product.name.toLowerCase()).to.include(searchTerm.toLowerCase());
      });
    });
  });

  it('Deve atualizar a imagem de um produto e verificar se foi atualizado corretamente', () => {
    const source = 'defaultSource';
    const color = 'defaultColor';
    const newImageId = 'newImageId';

    cy.request({
      method: 'PUT',
      url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}`,
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      body: {
        imageId: newImageId
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.imageId).to.eql(newImageId);
    });
  });
});
