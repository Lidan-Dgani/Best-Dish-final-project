import { Link, NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-light bg-light shadow-sm"
      aria-label="Fourth navbar example"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-signpost-split"></i> Best Dish
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            {user && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/all-posts">
                    All Posts
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/favorites">
                    Favorites
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/my-posts">
                    My Posts
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            {!user && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signin">
                    Sign In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
            {user && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  Log Out
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
