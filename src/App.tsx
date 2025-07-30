import { Container, Typography } from "@mui/material";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Container maxWidth="sm" sx={{ pt: 6 }}>
      <Typography variant="h4" gutterBottom>
        Task Tracker
      </Typography>
      <TaskForm />
      <TaskList />
    </Container>
  );
}

export default App;
