import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React, { Fragment } from "react";
import App from "./App";
import Culturals from "./components/Culturals/Culturals";
import Desafio from "./components/Culturals/Desafio/Desafio";
import VogueFiesta from "./components/Culturals/VogueFiesta/VogueFiesta";
import Aghaidh from "./components/Culturals/Aghaidh/Aghaidh";
import PencilDrawing from "./components/Culturals/PencilDrawing/PencilDrawing";
import LightMusic from "./components/Culturals/LightMusic/LightMusic";

const MyRoutes = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/culturals" exact element={<Culturals />} />
          <Route path="/desafio" exact element={<Desafio />} />
          <Route path="/voguefiesta" exact element={<VogueFiesta />} />
          <Route path="/aghaidh" exact element={<Aghaidh />} />
          <Route path="/pencildrawing" exact element={<PencilDrawing />} />
          <Route path="/lightmusic" exact element={<LightMusic />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default MyRoutes;
