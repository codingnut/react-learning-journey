import Header from "./components/Header";
import Content from "./components/Content";
import {MainFooter} from "./components/Footer";  // { } required for named export/import
import logo from "./logo.svg";

function App() {
  return (
    <div className="App container">
      <Header />
      <Content />
      <MainFooter />
    </div>
  );
}

export default App;