import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Looks from "./components/Looks";

export default function Home() {
  return (
    <div>
      <Header />

      <About />
      <Projects />
    </div>
  );
}
