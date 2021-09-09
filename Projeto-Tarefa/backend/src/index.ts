import 'reflect-metadata';
import * as express from 'express';
import { createConnection } from 'typeorm'
import * as BodyParser from 'body-parser';

import routes from './routes';

const port = 3333
const hostname = 'localhost';
const app = express();
createConnection()

app.use(express.json());
app.use(routes)

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});