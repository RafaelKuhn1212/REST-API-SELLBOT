// :)
import express from 'express';
import appconfig from './config/expressCfg';
const app = express();
appconfig(app)
app.listen(8080, () => console.log(`Escutando na porta 8080`))
//teste