import "reflect-metadata";
import { HomeController } from "./home";
import "jest";
import { AppLogger } from "../logging/logger";
import { ConfigProvider } from "../config";

describe("Home Controller", () => {
    let logger: AppLogger;
    let homeController: HomeController;

    beforeAll(async() => {
        logger = new AppLogger(new ConfigProvider().getConfig());
        homeController = new HomeController(logger);
    });

    it("Should return Home Sweet home on /", async() =>{
        const response = homeController.get();
        expect(response).toEqual('Home sweet home');
    });
});