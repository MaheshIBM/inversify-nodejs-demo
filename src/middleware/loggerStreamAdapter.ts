import { Logger } from "log4js";

export const LoggerStreamAdapter = {
    toStream(logger: Logger) {
      return {
        write(message: any) {
          logger.info(message.slice(0, -1));
        }
      };
    }
  };
