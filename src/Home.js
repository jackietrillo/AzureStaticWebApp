import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Intro from "./Components/Intro";
// import Carousel from "./Components/Carousel";

function Home() {
  return (
    <>
      <Header />
      <main>
        <img className="home-image" src="images/home-bw.jpg" />
        <Intro />
        <ul id="home-menu">
          <li>
            <Link to="/Skills">Skills</Link>
          </li>
          <li>
            <Link to="/Resume">Resume</Link>
          </li>
          <li>
            <Link to="/Portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}

export default Home;
