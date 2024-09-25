import React from "react";
import Header from "./components/header";
import Intro from "./components/intro";
import Project from "./components/project";
import About from "./components/about";
import Footer from "./components/footer";
import "../app/globals.css";

const page = () => {
  return (
    <>
      <Header />
      <Intro />
      <hr className="my-8" style={{ borderTop: "1px solid #484848" }} />
      <section id="work">
        <Project />
        <hr className="my-8" style={{ borderTop: "1px solid #484848" }} />
      </section>
      <section id="about">
        <About />
        <hr className="my-8" style={{ borderTop: "1px solid #484848" }} />
      </section>
      <section id="foot">
        <Footer />
        <hr className="my-8" style={{ borderTop: "1px solid #484848" }} />
      </section>
    </>
  );
};

export default page;
