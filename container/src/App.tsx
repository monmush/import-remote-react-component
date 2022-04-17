import "./App.css";
import logo from "./logo.svg";
// @ts-ignore
import renderCounter from "https://minhpham.sgp1.cdn.digitaloceanspaces.com/import-remote-react-component/counter.es.js";
import { useEffect } from "react";

function App() {
  // Render the remote Counter component from Digital Ocean
  useEffect(() => {
    renderCounter(document.getElementById("counter"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Container App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontSize: 14 }}>
          __The code below is imported from a remote component hosted on Digital
          Ocean__
        </p>
        <div id="counter"></div>
      </header>
    </div>
  );
}

export default App;
