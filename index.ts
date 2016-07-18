import * as express from 'express';
import { init } from './root.ts';
const app = express();

init(app);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
