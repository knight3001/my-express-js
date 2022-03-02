import { Request, Response } from "express";
import config from "config";
import { get } from "lodash";
import {
  createAccessToken,
  createSession,
  findSessions,
  updateSession,
} from "../services/session.service";
import { validatePassword } from "../services/user.service";
import { sign } from "../utils/jwt.utils";

export async function createUserSessionHandler(req: Request, res: Response) {
  const user = await validatePassword(req.body);

  if (!user) {
    return res.sendStatus(401).send("Invalid username or password");
  }

  const session = await createSession(user._id, req.get("user-agent") || "");

  const accessToken = createAccessToken({ user, session });

  const refreshToken = sign(session, {
    expiresIn: config.get("refreshTokenTtl"),
  });

  return res.send({ accessToken, refreshToken });
}

export async function invalidateUserSessionHandler(
  req: Request,
  res: Response
) {
  const sessionId = get(req, "user.session");

  await updateSession({ _id: sessionId }, { valid: false });

  return res.sendStatus(200);
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");

  const sessions = await findSessions({ user: userId, valid: true });

  return res.send(sessions);
}
