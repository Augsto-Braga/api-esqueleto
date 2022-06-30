import { Request, Response } from "express";
import { OkService } from "../services/ok";

class Ok {
  private service = OkService;

  public handle(req: Request, res: Response) {
    const response = new this.service().execute();

    res.status(201).json(response);
  }
}

export { Ok };
