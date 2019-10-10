import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import * as bodyParser from 'body-parser';
import './controllers/home'
import './controllers/users'
import * as morgan from 'morgan'
import { TYPES } from "./const/types";
import { ConfigProvider }  from './config'
import { AppLogger } from './logging/logger'
import { LoggerStreamAdapter } from './middleware/loggerStreamAdapter'

let container = new Container();
container.bind(TYPES.CONFIG).toConstantValue(new ConfigProvider().getConfig())
container.bind<AppLogger>(AppLogger).toSelf()
const appLogger = new AppLogger(new ConfigProvider().getConfig()).getLogger()

let server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
    app.use(morgan("dev",{
      stream: LoggerStreamAdapter.toStream(appLogger)
    }));
  });

let serverInstance = server.build();
serverInstance.listen(3001);
console.log('Server started on port 3001, mostly at http://localhost:3001');
