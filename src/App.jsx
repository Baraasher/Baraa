import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "./components/Header/Header";
import Content from "./components/Title/Content";
function App() {

  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Header />
      <Content />
    </Container>
  );
}
export default App;
