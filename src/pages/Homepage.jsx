import Navbar from "../components/Navbar/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
function Homepage()
{
    return(
        <>
            <Navbar />
            <div className="body-container">

            
            <About />
            <Skills />
            <Projects />
            </div>
        </>
    );
}

export default Homepage;