import "./App.css";
import AboutMe from "./components/AboutMe";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Techstack from "./components/Techstack";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <br />
        <br />
        <br />
        <section id="home">
          <Hero />
        </section>
        <br />
        <br />
        <br />
        <section id="about">
          <AboutMe />
        </section>
        <br />
        <br />
        <br />
        <section id="tech">
          <Techstack />
        </section>

        <section id="contact">
          <GetInTouch />
        </section>
        <br />
        <hr />
        <br />
        <br />
        <button
          className="to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Top
        </button>
      </div>
    </>
  );
}

export default App;
