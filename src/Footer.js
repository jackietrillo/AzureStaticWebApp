function Footer() {
  const today = new Date();

  return (
    <footer>
      <small>copyright &copy; {today.getFullYear()} all rights reserved</small>
    </footer>
  );
}

export default Footer;
