import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;