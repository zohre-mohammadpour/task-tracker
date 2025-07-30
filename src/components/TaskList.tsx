import { useDispatch, useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { toggleTask, deleteTask } from "../redux/taskSlice";
import type { AppDispatch, RootState } from "../redux/store";

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <List>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => dispatch(deleteTask(task.id))}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <Checkbox
            checked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
          />
          <ListItemText
            primary={task.title}
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "gray" : "inherit",
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
