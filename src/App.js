import { About } from "./components/About";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Header />
      <About />
      <Skills />
    </>
  );
}

export default App;
