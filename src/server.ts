import 'reflect-metadata';
import express from 'express';
// import * as bodyParser from 'express';
import routes from './routes';
import uploadConfig from './config/upload';

import './database';

const app = express();

// app.use(bodyParser.json());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));

app.use(routes);

app.listen(3333, () => {
  console.log('😎 Server is up at port 3333!');
});
