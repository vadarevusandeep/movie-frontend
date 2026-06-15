import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  removeFavorite
} from "../features/favoriteSlice";

function Favorites() {

  const dispatch = useDispatch();

  const favorites =
    useSelector(
      state => state.favorites
    );

  return (
    <div className="favorites-container">

      <h1 className="page-title">
        Favorite Movies
      </h1>

      {
        favorites.length === 0 ? (

          <div className="empty-favorites">

            <h2>
              No Favorite Movies
            </h2>

            <p>
              Add movies from Movies page.
            </p>

          </div>

        ) : (

          <div className="favorites-grid">

            {
              favorites.map(movie => (

                <div
                  key={movie.id}
                  className="favorite-card"
                >

                  <img
                    src={movie.image}
                    alt={movie.title}
                  />

                  <div className="favorite-content">

                    <h2>
                      {movie.title}
                    </h2>

                    <p>
                      🎭 {movie.genre}
                    </p>

                    <p>
                      ⭐ {movie.rating}
                    </p>

                    <button
                      onClick={() =>
                        dispatch(
                          removeFavorite(
                            movie.id
                          )
                        )
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        )
      }

    </div>
  );
}

export default Favorites;