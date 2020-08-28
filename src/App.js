import React, { useRef } from "react";
import { motion } from "framer-motion";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const constraintsRef = useRef(null);
  return (
    <div className="App" >
      <header className="App-header" ref={constraintsRef}>
        <motion.div
          layout
          animate={{ rotate: 360, opacity: 1 }}
          transition={{ yoyo: Infinity, ease: "easeInOut", duration: 2 }}
          initial={{ opacity: 0.25 }}
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.5, duration: 0.5 }}
          drag
          dragConstraints={constraintsRef}
        >
          <img src={logo} className="App-logo" alt="React JS Logo" />
        </motion.div>
        <p>
          Feel free to check out the source code, I hope you all had lots of fun! <span role="img" aria-label="a party popper shooting ribbons">🎉</span>
        </p>
        <a
          className="App-link"
          href="https://github.com/petercr/motion-time"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code on GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
