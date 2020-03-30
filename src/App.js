import React, { useRef } from "react";
import { motion } from "framer-motion";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const constraintsRef = useRef(null);
  return (
    <div className="App" ref={constraintsRef}>
      <header className="App-header">
        <motion.div
          animate={{ rotate: 360, opacity: 1 }}
          transition={{ yoyo: Infinity, ease: "easeInOut", duration: 2 }}
          initial={{ opacity: 0.25 }}
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.5, duration: 0.5 }}
          drag="x"
          dragConstraints={constraintsRef}
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
