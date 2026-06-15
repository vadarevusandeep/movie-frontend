import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../services/api";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [ratingFilter, setRatingFilter] = useState("All");
  const [sort, setSort] = useState("");

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const response = await api.get("/movies");

    setMovies(response.data);
  }

  async function deleteMovie(id) {
    await api.delete(`/movies/${id}`);

    setMovies(
      movies.filter(
        (movie) => movie.id !== id
      )
    );
  }

  const filteredMovies = movies.filter(
    (movie) => {
      const searchMatch =
        movie.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const genreMatch =
        genre === "All" ||
        movie.genre === genre;

      const ratingMatch =
        ratingFilter === "All" ||

        (ratingFilter === "Excellent" &&
          movie.rating >= 4.5) ||

        (ratingFilter === "Good" &&
          movie.rating >= 4 &&
          movie.rating < 4.5) ||

        (ratingFilter === "Average" &&
          movie.rating < 4);

      return (
        searchMatch &&
        genreMatch &&
        ratingMatch
      );
    }
  );

  let finalMovies = [...filteredMovies];

  if (sort === "high") {
    finalMovies.sort(
      (a, b) => b.rating - a.rating
    );
  }

  if (sort === "low") {
    finalMovies.sort(
      (a, b) => a.rating - b.rating
    );
  }

  return (
    <>
      <h1>Popular Movies</h1>

      <Link
        className="add-btn"
        to="/add-movie"
      >
        Add Movie
      </Link>

      <div className="filters">

        <input
          type="text"
          placeholder="Search Movie..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={genre}
          onChange={(e) =>
            setGenre(e.target.value)
          }
        >
          <option>All</option>
          <option>Action</option>
          <option>Drama</option>
          <option>Adventure</option>
          <option>Sci-Fi</option>
          <option>Fantasy</option>
          <option>Romance</option>
          <option>Thriller</option>
          <option>Crime</option>
          <option>Superhero</option>
        </select>

        <select
          value={ratingFilter}
          onChange={(e) =>
            setRatingFilter(e.target.value)
          }
        >
          <option>All</option>
          <option>Excellent</option>
          <option>Good</option>
          <option>Average</option>
        </select>

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >
          <option value="">
            Sort Rating
          </option>

          <option value="high">
            High To Low
          </option>

          <option value="low">
            Low To High
          </option>
        </select>

      </div>

      <div className="movies">
        {finalMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onDelete={deleteMovie}
          />
        ))}
      </div>
    </>
  );
}

export default Movies;