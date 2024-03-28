import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
