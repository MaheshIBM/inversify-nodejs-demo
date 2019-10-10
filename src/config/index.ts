import { injectable } from "inversify";

@injectable()
export class ConfigProvider {
  config = {
    logging: {
      appenders:
        { console: { type: "console" } },
        categories:
        { default: { appenders: ["console"], level: "debug" } }
    },
    web: {
        port: 3000
      }
  };


  getConfig(){
    return this.config
  }
}
