import { taskList } from '../../../shared/data/taskList';
import { Task } from '../../../shared/types/task';

export const taskApi = {
    getTasks(): Task[] {
        return taskList;
    },
    addTask(task: Task) {
        taskList.push(task);
    },
    updateTask(updatedTask: Task) {
        const index = taskList.findIndex((task) => task.id === updatedTask.id);
        if (index !== -1) {
            taskList[index] = updatedTask;
        }
    },
    deleteTask(id: string) {
        const index = taskList.findIndex((task) => task.id === id);
        if (index !== -1) {
            taskList.splice(index, 1);
        }
    },
};