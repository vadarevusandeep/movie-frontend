import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import {
  addFavorite
} from "../features/favoriteSlice";

function MovieCard({ movie, onDelete }) {

  const dispatch = useDispatch();

  function handleFavorite() {
    dispatch(addFavorite(movie));
    alert("Added To Favorites ❤️");
  }

  return (
    <div className="card">

      <img
        src={movie.image}
        alt={movie.title}
        onError={(e) => {
          e.target.src =
            "https://placehold.co/300x450/1f2937/ffffff?text=Movie+Poster";
        }}
      />

      <h3>{movie.title}</h3>

      <p>{movie.genre}</p>

      <p>⭐ {movie.rating}</p>

      <div className="card-actions">

        <button
          className="favorite-btn"
          onClick={handleFavorite}
        >
          ❤️ Favorite
        </button>

      </div>

      <div className="card-actions">

        <Link
          className="view-btn"
          to={`/movies/${movie.id}`}
        >
          View
        </Link>

        <Link
          className="edit-btn"
          to={`/edit-movie/${movie.id}`}
        >
          Edit
        </Link>

        <button
          className="delete-btn"
          onClick={() =>
            onDelete(movie.id)
          }
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default MovieCard;