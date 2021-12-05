import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <Link className="navbar-brand" to="/">
        WikiCountries
      </Link>
    </nav>
  );
}

export default Navbar;
