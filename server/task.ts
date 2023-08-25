import mongoose from "mongoose"
import { MONGO_DB_URI } from "./helper"
import { TaskModel } from "./models/task"

export type Task = {
  id: string;
  token: string;
  title: string;
  url: string;
  solved: boolean;
  date: Date;
};

export type GetTasksResponse = {
  success: boolean;
  tasks: Task[];
};

export type GetTaskResponse = {
  success: boolean;
  task?: Task;
};

export type UpdateTaskResponse = {
  success: boolean;
};

export type DeleteTaskResponse = {
  success: boolean;
};

/**
 * The Task server class that will be deployed on the genezio infrastructure.
 */
export class TaskService {
  constructor() {
    this.#connect();
  }

  /**
   * Private method used to connect to the DB.
   */
  #connect() {
    mongoose.set('strictQuery', false);
    mongoose.connect(MONGO_DB_URI);
  }

  /**
   * Method that returns all tasks for a giving user ID.
   * Only authenticated users with a valid token can access this method.
   *
   * The method will be exported via SDK using genezio.
   *
   * @param {*} token The user's token.
   * @returns An object containing two properties: { success: true, tasks: tasks }
   */
  async getAllTasksByUser(token: string): Promise<GetTasksResponse> {
    console.log(`Get all tasks by user request received with token ${token}`);

    const tasks = (await TaskModel.find({ token: token })).map((task) => {
      return {
        id: task._id.toString(),
        token: task.token,
        title: task.title,
        url: task.url,
        solved: task.solved,
        date: task.date,
      };
    });

    if (tasks.length === 0) {
      await TaskModel.create({
        token: token,
        title: 'Check our documentation',
        url: 'https://genez.io/docs',
      });

      await TaskModel.create({
        token: token,
        title: 'Read technical articles on the genezio blog',
        url: 'https://genez.io/blog',
      });

      await TaskModel.create({
        token: token,
        title: 'Check the other example projects',
        url: 'https://github.com/genez-io/genezio-examples',
      });

      const initTasks = (await TaskModel.find({ token: token })).map((task) => {
        return {
          id: task._id.toString(),
          token: task.token,
          title: task.title,
          url: task.url,
          solved: task.solved,
          date: task.date,
        };
      });

      return { success: true, tasks: initTasks };
    }

    return { success: true, tasks: tasks };
  }

  /**
   * Method that creates a task for a giving user ID.
   * Only authenticated users with a valid token can access this method.
   *
   * The method will be exported via SDK using genezio.
   *
   * @param {*} token The user's token.
   * @param {*} title The tasktitle.
   * @returns An object containing two properties: { success: true, tasks: tasks }
   */
  async createTask(token: string, title: string): Promise<GetTaskResponse> {
    console.log(
      `Create task request received for user with ${token} with title ${title}`,
    );

    const task = await TaskModel.create({
      title: title,
      url: '',
      token: token,
    });

    return {
      success: true,
      task: {
        title: title,
        url: '',
        token: token,
        id: task._id.toString(),
        solved: false,
        date: new Date(),
      },
    };
  }

  /**
   * Method that creates a task for a giving user ID.
   * Only authenticated users with a valid token can access this method.
   *
   * The method will be exported via SDK using genezio.
   *
   * @param {*} token The user's token.
   * @param {*} id The task's id.
   * @param {*} title The task's title.
   * @param {*} solved If the task is solved or not.
   * @returns An object containing two properties: { success: true }
   */
  async updateTask(
    token: string,
    id: string,
    title: string,
    solved: boolean,
  ): Promise<UpdateTaskResponse> {
    console.log(
      `Update task request received with id ${id} with title ${title} and solved value ${solved}`,
    );

    await TaskModel.updateOne(
      { _id: id, token: token },
      {
        title: title,
        solved: solved,
      },
    );

    return { success: true };
  }

  /*
  * TODO - Genezio Challenge
  * Implement the following method that deletes a task for a giving user ID.
  * Only authenticated users with a valid token can access this method.
  *
  * The method will be exported via SDK using genezio.
  *
  * @param {*} token The user's token.
  * @param {*} title The tasktitle.
  * @returns An object containing one property: { success: true }
  */
   async deleteTask(token: string, id:string) : Promise<DeleteTaskResponse> {
     console.log(`Implement this method to delete a user's task with id ${id}`)

      return { success: false }
   }
}
