import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Switch,
  Box,
} from "@mui/material";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

interface AppProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function App({ darkMode, setDarkMode }: AppProps) {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6">Task Tracker</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography>Dark</Typography>
            <Switch
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              color="default"
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="sm"
        sx={{ pt: { xs: 2, md: 6 }, px: { xs: 1, sm: 2 } }}
      >
        <TaskForm />
        <TaskList />
      </Container>
    </>
  );
}

export default App;
