import React from "react";
import { motion } from "framer-motion";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.div
          animate={{ rotate: 360, opacity: 1 }}
          transition={{ duration: 3 }}
          initial={{ opacity: 0.25 }}
          whileHover={{ scale: 1.2, duration: 0.5 }}
          whileTap={{ scale: 0.8, duration: 0.5 }}
          drag="x"
          dragConstraints={{ left: -250, right: 250 }}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </motion.div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
