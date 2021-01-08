import { Link } from "react-router-dom";
function NavigationBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-ul">
        <li className="nav-li">
          <Link className="li" to="/Feed">
            Feed
          </Link>
        </li>
        <li className="nav-li">
          <Link className="li" to="/Instock">
            In Stock
          </Link>
        </li>
        <li className="nav-li">
          <Link className="li" to="/Upcoming">
            Up Coming
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
