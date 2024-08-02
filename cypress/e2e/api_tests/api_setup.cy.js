describe('API Setup', () => {
  let authToken;
  let userId;

  const username = 'testUser';
  const password = 'testPassword';
  const email = 'testUser@example.com';

  const createUser = () => {
    cy.request({
      method: 'POST',
      url: 'https://www.advantageonlineshopping.com/api/v1/users',
      body: {
        username: username,
        password: password,
        email: email
      }
    }).then(response => {
      expect(response.status).to.eq(201);
    });
  };

  const loginUser = () => {
    cy.request({
      method: 'POST',
      url: 'https://www.advantageonlineshopping.com/api/v1/users/login',
      body: {
        username: username,
        password: password
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      cy.wrap(response.body.userId).as('userId');
      cy.wrap(response.body.authToken).as('authToken');
    });
  };

  it('Deve criar um novo usuário', () => {
    createUser();
  });

  it('Deve fazer login com o usuário criado', () => {
    loginUser();
  });
});
