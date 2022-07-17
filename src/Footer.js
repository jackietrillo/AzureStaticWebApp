import Quote from "./Components/Quote";

function Footer() {
  const today = new Date();

  return (
    <footer>
      
      <p className="copy">
        <small>copyright &copy; {today.getFullYear()}</small>
      </p>
    </footer>
  );
}

export default Footer;
