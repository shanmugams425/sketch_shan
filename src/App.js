import "./App.css";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Offerings from "./Components/Offerings";
import WorkPortfolio from "./Components/WorkPortfolio/WorkPortfolio";

function App() {
  return (
    <div className="">
      <Navbar />
      <Content />
      <Offerings />
      <WorkPortfolio />
    </div>
  );
}

export default App;
