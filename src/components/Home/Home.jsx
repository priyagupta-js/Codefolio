import Button from "../Button";
import "./Home.css";
import ProfilePic from "../../assets/profile-pic.png";
import { TypeAnimation } from 'react-type-animation';
function Home()
{
    return(
<div className="home-container">
<div className="home-details">
<div className="home-content">
    <h5 className="text-2xl">Hey!!</h5>
    <h1 className="portfolio-name">I'm Priya Gupta</h1>
    <h5 className="job-roles">I am into 
    {/* <span>Mern Stack develpment ; Frontend Development ; Software Development</span> */}
    
    <TypeAnimation
      sequence={[
        ' Frontend Development', // Types 'One'
        1000, // Waits 1s
        ' MERN Stack Development', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        ' Software Development',// Types 'Three' after deleting 'Two'
        2000, 
      ]}
      className="job-names"
      wrapper="span" 
      cursor={true}
      repeat={Infinity}
    />
    </h5>
    <div className="click-btn">
    <Button text="MY WORK" className="work-btn"
    />
    <Button text="HIRE ME" className="hire-btn"/>
    </div>
    </div>
    <div className="home-profilePic">
        {/* image */}
        <img className="profile-img"src={ProfilePic} alt="profile-pic" />
    </div>
</div>

</div>
    );
}
export default Home;
