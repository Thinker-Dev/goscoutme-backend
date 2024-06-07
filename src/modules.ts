import { Express } from "express";
import { GlobalRoutes } from "./decorators";
import { AuthController } from "./useCases/Auth/auth.controller";
import { AuthRoutes } from "./useCases/Auth/auth.route";
import { ProfileRoutes } from "./useCases/Profile/profile.route";
import { SportsRoutes } from "./useCases/Sports/sports.route";

@GlobalRoutes([AuthRoutes, ProfileRoutes, SportsRoutes])
export class AppGlobalRoutes {
  startModule(app: Express): void {}
}


