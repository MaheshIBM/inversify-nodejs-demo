import { controller, httpGet } from 'inversify-express-utils';
import { inject } from 'inversify';
import { AppLogger } from '../logging/logger';
import { Logger } from 'log4js';
import { TYPES } from '../const/types';

@controller('/')
export class HomeController {

    private logger: Logger;

    constructor(@inject(TYPES.logger) logger:Logger){
        this.logger = logger;
    }

    @httpGet('/')
    public get(): string {
        this.logger.info("hello");
        return 'Home sweet home';
    }
}
