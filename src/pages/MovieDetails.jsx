import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import MovieTrailer from "../components/MovieTrailer";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie();
  }, []);

  async function getMovie() {
    try {
      const response = await api.get(
        `/movies/${id}`
      );

      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">
      <img
        src={movie.image}
        alt={movie.title}
      />

      <h1>{movie.title}</h1>

      <p>{movie.description}</p>
      <MovieTrailer
  trailerId={movie.trailerId}
/>

      <h3>Genre</h3>
      <p>{movie.genre}</p>

      <h3>Director</h3>
      <p>{movie.director}</p>

      <h3>Release Year</h3>
      <p>{movie.releaseYear}</p>

      <h3>Duration</h3>
      <p>{movie.duration}</p>

      <h3>Rating</h3>
      <p>{movie.rating}</p>
    </div>
  );
}

export default MovieDetails;