import "reflect-metadata";
import { HomeController } from "./home";
import "jest";
import { AppLogger } from "../logging/logger";
import Logger from 'log4js'
import { ConfigProvider } from "../config";

describe("Home Controller", () => {

    beforeAll(async() => {
        
    });

    it("Should return Home Sweet home on /", async() =>{
        const logger = Logger.getLogger();
        const loggerSpy = jest.spyOn(logger, "info")
        const homeController = new HomeController(logger);
        const response = homeController.get();
        expect(loggerSpy).toHaveBeenCalledWith("hello")
        expect(response).toEqual('Home sweet home');
    });
});