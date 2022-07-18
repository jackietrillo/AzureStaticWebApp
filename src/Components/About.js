import Header from "../Header";
import Footer from "../Footer";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <h2 className="section-title">
          <span>About Me</span>
        </h2>
        <div className="spacer"></div>
        <p>
          I’m a software engineer specializing in building Web Applications in
          C#/NET and React.
        </p>
        <p>
          I worked at Oracle for 10 years where I learned a lot about the
          Software Development Lifecycle
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;
