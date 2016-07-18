import * as express from 'express';
import { init } from './root';
const app = express();

init(app);

app.listen(3000, () => {
  console.log('TypeScript example demo listening on port 3000!');
});
