import {Prioroty, Status} from "./types.ts";

export type Task = {
    id: string;
    title: string;
    priority: Prioroty;
    status: Status;
    progress: number;
};