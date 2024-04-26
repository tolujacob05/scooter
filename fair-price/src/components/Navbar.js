import "./css/Navbar.css";
import vec1 from "../img/vec1.png";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-logo">
          <img src={vec1} alt="" />
        </div>

        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>

        <div className="nav-btn">
          <span>Login</span>
          <span>Book Scooter</span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
