import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import type { AppDispatch } from "../redux/store";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTask({ title }));
    setTitle("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
        alignItems: { xs: "stretch", sm: "center" },
        mb: 4,
      }}
    >
      <TextField
        label="New Task"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        sx={{
          fontSize: { xs: "0.9rem", md: "1rem" },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          width: { xs: "100%", sm: "auto" },
          fontSize: { xs: "0.9rem", md: "1rem" },
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default TaskForm;
