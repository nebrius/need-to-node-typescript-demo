import * as express from 'express';

/**
 * Initializes the root route
 *
 * @parameter {express.Express} app - The application to initialize the router for
 */
export function init(app: express.Express) {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
}
