/**
 * routes/sample/index.ts
 *
 * What it does:
 *   Just an example of a route in koji with a corresponding koji.json
 *   file. The request preview window should show up to your right and
 *   send request should return 'Hello World!'
 *
 * Things to Change:
 *   Make this route your own, create new routes with this as a base and
 *   edit this file to create any backend routes that you want
 */

// packages
import { Request, Response } from 'express';


class DefaultController {
  public init(req: Request, res: Response) {
    res.status(200).send({
      message: '🙋‍ Hello World!',
    });
  }
}

export const defaultController = new DefaultController();
