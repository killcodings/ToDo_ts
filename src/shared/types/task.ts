import {Prioroty, Status} from "./types.ts";

export type CreateTask = Omit<Task, "id" | "status" | "progress">;

export type PriorityVariant = "high" | "medium" | "low";
export type StatusVariant = "todo" | "in_progress" | "done";

export type Task = {
    id: string;
    title: string;
    priority: Prioroty;
    status: Status;
    progress: number;
};

