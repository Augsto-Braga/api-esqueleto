import Router from "express";
import { Ok } from "../controllers/ok";

const route = Router();

route.route("/ok").get(new Ok().handle.bind(new Ok()));

export default route;
