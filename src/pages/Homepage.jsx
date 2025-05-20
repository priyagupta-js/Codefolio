import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
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