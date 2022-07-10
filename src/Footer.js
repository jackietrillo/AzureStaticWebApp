import Quote from "./Components/Quote";

function Footer() {
  const today = new Date();

  return (
    <footer>
      <Quote />
      <p style={{ backgroundColor: "#888", color: "#fff" }}>
        <small>copyright &copy; {today.getFullYear()}</small>
      </p>
    </footer>
  );
}

export default Footer;
