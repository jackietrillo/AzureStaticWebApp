
function Footer() {
  const today = new Date();

  return (
    <footer>      
      <small>copyright &copy; {today.getFullYear()}</small>
    </footer>
  );
}

export default Footer;
