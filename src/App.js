import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MemoExample from "./Pages/MemoExample";
import UseCallBackExample from "./Pages/UseCallBackExample";
import UseMemoExample from "./Pages/UseMemoExample";
import Navbar from "./Components/Navbar";

function App() {


  console.log("app ")

  return (
    <div className="App">

        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<MemoExample />} />
                <Route path="/useEffectExample" element={<UseCallBackExample />} />
                <Route path="/useMemoExample" element={<UseMemoExample />} />
            </Routes>
        </Router>
      {/*<MemoExample />*/}
    </div>
  );
}

export default App;
