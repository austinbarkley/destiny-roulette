import "./App.scss";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RandomWheel from "./routes/Wheel";
import DestinyRoulette from "./routes/DestinyRoulette";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/">
            <div></div>
          </Route> */}
          <Route path="/wheel" element={<RandomWheel />} />
          <Route path="/destiny-roulette" element={<DestinyRoulette />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
