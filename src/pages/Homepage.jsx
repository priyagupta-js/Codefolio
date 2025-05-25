import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/Projects";
import "../../src/index.css";
function Homepage()
{
    return(
        <>
            <Navbar />
            <About />
            <Skills />
            <Projects />
        </>
    );
}

export default Homepage;