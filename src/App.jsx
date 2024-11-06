// import React, { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Aboutme from "./components/Aboutme";

// import { TimeLine1, TimeLine2, TimeLine3, TimeLine3ForMobile } from "./components/timeLines";
// import Projects from "./components/Projects";
// import { Button1 } from "./components/Buttons";
// import Skills from "./components/Skills";
// import GetInTouch from "./components/GetInTouch";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Home />
//       <TimeLine1 />
//       <Aboutme />
//       <TimeLine2 />
//       <Projects />
//       <Button1 />
//       <div className="hidden md:block"><TimeLine3/></div>
//       <div className="block md:hidden"><TimeLine3ForMobile/></div>
//       <Skills />
//       <GetInTouch/>
//     </>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import { TimeLine1, TimeLine2, TimeLine3, TimeLine3ForMobile } from "./components/timeLines";
import Projects from "./components/Projects";
import { Button1 } from "./components/Buttons";
import Skills from "./components/Skills";
import GetInTouch from "./components/GetInTouch";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="peeek-loading">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p className="absolute left-1/2 top-2/3 -translate-x-1/2 text-3xl">Loading...</p>
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <TimeLine1 />
          <Aboutme />
          <TimeLine2 />
          <Projects />
          <Button1 />
          <div className="hidden md:block"><TimeLine3 /></div>
          <div className="block md:hidden"><TimeLine3ForMobile /></div>
          <Skills />
          <GetInTouch />
        </>
      )}
    </>
  );
};

export default App;
