import Header from "./Header";
import Footer from "./Footer";
import Intro from "./Components/Intro";
// import Carousel from "./Components/Carousel";

function Home() {
  return (
    <>
      <Header />
      <main>
        <img className="home-image" src="images/home.jpg" />
        <Intro />
      </main>
      <Footer />
    </>
  );
}

export default Home;
