import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../types/tasks";
import { v4 as uuidv4 } from "uuid";

interface TaskState {
  tasks: Task[];
}
const savedTasks = localStorage.getItem("tasks");

const initialState: TaskState = {
  tasks: savedTasks ? JSON.parse(savedTasks) : [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ title: string }>) => {
      const newTask: Task = {
        id: uuidv4(),
        title: action.payload.title,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((t) => t.id == action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
  },
});
export const { addTask, toggleTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
