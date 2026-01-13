import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">TaskFlow</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}

export default Header;
