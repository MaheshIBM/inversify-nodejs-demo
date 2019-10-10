import { controller, httpGet } from 'inversify-express-utils';
import { inject } from 'inversify';
import { AppLogger } from '../logging/logger';

@controller('/users')
export class UserController {

    private logger;

    constructor(@inject(AppLogger) logger:AppLogger){
        this.logger = logger.getLogger()
    }

    @httpGet('/')
    public get(): string {
        this.logger.info("hello");
        return 'Home sweet home from user';
    }
}
