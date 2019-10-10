import { configure, getLogger } from 'log4js';
import { inject, injectable } from 'inversify';
import { TYPES } from '../const/types';

@injectable()
export class AppLogger {
    private config
    constructor(@inject (TYPES.CONFIG) config) {
        this.config = config
    }

    public getLogger(){
        configure(this.config.logging);
        return getLogger();
    }
}