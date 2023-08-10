/**
* This is an auto generated code. This code should not be modified since the file can be overwriten
* if new genezio commands are executed.
*/
import { Remote } from "./remote";
export class TaskService {
    static async getAllTasksByUser(token) {
        return await TaskService.remote.call("TaskService.getAllTasksByUser", token);
    }
    static async createTask(token, title) {
        return await TaskService.remote.call("TaskService.createTask", token, title);
    }
    static async updateTask(token, id, title, solved) {
        return await TaskService.remote.call("TaskService.updateTask", token, id, title, solved);
    }
    static async deleteTask(token, id) {
        return await TaskService.remote.call("TaskService.deleteTask", token, id);
    }
}
TaskService.remote = new Remote("http://127.0.0.1:8083/TaskService");
export { Remote };
