import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <Header />

      <About />
      <Projects />
    </div>
  );
}
