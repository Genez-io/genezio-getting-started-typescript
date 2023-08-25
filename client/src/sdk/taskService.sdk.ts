/**
* This is an auto generated code. This code should not be modified since the file can be overwriten
* if new genezio commands are executed.
*/

import { Remote } from "./remote";

export type Task = {id: string, token: string, title: string, url: string, solved: boolean, date: Date};
export type GetTasksResponse = {success: boolean, tasks: Array<Task>};
export type GetTaskResponse = {success: boolean, task?: Task};
export type UpdateTaskResponse = {success: boolean};
export type DeleteTaskResponse = {success: boolean};

export class TaskService {
  static remote = new Remote("https://hv3nrbvb75rgdpw2pocgcunrcm0qoynx.lambda-url.us-east-1.on.aws/TaskService");

  static async getAllTasksByUser(token: string): Promise<GetTasksResponse> {
    return await TaskService.remote.call("TaskService.getAllTasksByUser", token);
  }
  static async createTask(token: string, title: string): Promise<GetTaskResponse> {
    return await TaskService.remote.call("TaskService.createTask", token, title);
  }
  static async updateTask(token: string, id: string, title: string, solved: boolean): Promise<UpdateTaskResponse> {
    return await TaskService.remote.call("TaskService.updateTask", token, id, title, solved);
  }
  static async deleteTask(token: string, id: string): Promise<DeleteTaskResponse> {
    return await TaskService.remote.call("TaskService.deleteTask", token, id);
  }
}

export { Remote };
