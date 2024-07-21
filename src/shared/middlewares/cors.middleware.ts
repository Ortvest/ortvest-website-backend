import { NextFunction, Request, Response } from 'express';

const ortvestWebsiteUrl = process.env.ORTVEST_WEBSITE_URL;
const ortvestAdminUrl = process.env.ORTVEST_ADMIN_URL;
const localServer = process.env.LOCAL_FE;

const allowedOrigins = [ortvestWebsiteUrl, ortvestAdminUrl, localServer];

export const corsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const origin = req.headers.origin as string;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, mode',
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
  } else {
    next();
  }
};
