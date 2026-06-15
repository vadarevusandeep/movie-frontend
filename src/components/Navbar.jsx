import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const favorites =
    useSelector(
      state => state.favorites
    );

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  return (
    <nav>

      <Link to="/">
        Home
      </Link>

      <Link to="/movies">
        Movies
      </Link>

      {!user && (
        <>
          <Link to="/register">
            Register
          </Link>

          <Link to="/login">
            Login
          </Link>
        </>
      )}

      {user && (
        <>
          <Link to="/add-movie">
            Add Movie
          </Link>

          <Link to="/favorites">
            Favorites ({favorites.length})
          </Link>

          <span
            style={{
              color: "#facc15",
              fontWeight: "bold"
            }}
          >
            Hi, {user.name}
          </span>

          <Link to="/logout">
            Logout
          </Link>
        </>
      )}

    </nav>
  );
}

export default Navbar;