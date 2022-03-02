import { Express, Request, Response } from "express";
import {
  createUserSessionHandler,
  getUserSessionsHandler,
  invalidateUserSessionHandler,
} from "./controllers/session.controller";
import { createUserHandler } from "./controllers/user.controller";
import requiresUser from "./middleware/requiresUser";
import validateRequest from "./middleware/validateRequest";
import {
  createUserSchema,
  createUserSessionSchema,
} from "./schemas/user.schema";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // Register user
  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

  // Login
  app.post(
    "/api/sessions",
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );

  app.get("/api/sessions", requiresUser, getUserSessionsHandler);

  // Logout
  app.delete("/api/sessions", requiresUser, invalidateUserSessionHandler);
}
