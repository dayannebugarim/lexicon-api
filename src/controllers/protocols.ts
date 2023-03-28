import { Response } from "express";

export enum HttpStatusCode {
    OK = 200,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    INTERNAL_SERVER = 500,
}

export const notFound = (res: Response): Response =>  {
    return res.status(404).send({ error: `Word Not Found` });
};