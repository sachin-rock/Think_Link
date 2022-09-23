import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Dasboard from "./Components/Dasboard";
import Overview from "./Components/OverView";
import DashBordGraphscale from "./Components/DashBordGraphscale";
import Inventory from "./Components/Inventory";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <Dasboard />
        <div className="sub-body">
          <Overview />
          <DashBordGraphscale />
          <Inventory />
        </div>
      </div>
    </div>
  );
}

export default App;
