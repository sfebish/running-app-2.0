export const environment = {
  production: true,
  auth: {
    clientID: '0TI9srD0bQoKmFJ4cnPK0fC26UKTWWyD',
    domain: 'febish.auth0.com', // e.g., you.auth0.com
    audience: 'http://localhost:8080/api/', // e.g., http://localhost:3001
    redirect: 'http://localhost:4200/authenticating',
    scope: 'openid profile email'
  }
};
