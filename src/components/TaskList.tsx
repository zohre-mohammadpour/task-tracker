import { useSelector, useDispatch } from "react-redux";
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
    <List sx={{ width: "100%" }}>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => dispatch(deleteTask(task.id))}
              sx={{ fontSize: { xs: "1.5rem", md: "1rem" } }}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{
            px: { xs: 1, md: 2 },
            py: { xs: 0.5, md: 1 },
          }}
        >
          <Checkbox
            checked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
            sx={{ transform: { xs: "scale(1.3)", md: "scale(1)" } }}
          />
          <ListItemText
            primary={task.title}
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "gray" : "inherit",
              fontSize: { xs: "0.95rem", md: "1rem" },
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
