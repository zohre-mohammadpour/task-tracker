import { Container, Typography } from "@mui/material";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        pt: { xs: 2, md: 6 },
        px: { xs: 1, sm: 2 },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Task Tracker
      </Typography>
      <TaskForm />
      <TaskList />
    </Container>
  );
}

export default App;
