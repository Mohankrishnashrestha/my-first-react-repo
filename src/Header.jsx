import "./Header.css"
function Header() {
  return (
    <>
      <div className="main_division_of_header">
        <div>
          <img src="/images/logo.svg" alt="imae"    className="image_of_logo" />
        </div>
        <nav className="navigation">
          <a className="navigation_links">Home</a>
          <a className="navigation_links">Gallery</a>
          <a className="navigation_links">Contact</a>
          <a className="navigation_links">About</a>
        </nav>
      </div>
    </>
  );
}

export default Header;
