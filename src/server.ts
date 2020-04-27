import express from 'express';
import * as bodyParser from 'express';
import routes from './routes';

const app = express();

app.use(bodyParser.json());

app.use(routes);

app.listen(3333, () => {
  console.log('😎 Server is up at port 3333!');
});
