function MovieTrailer({ trailerId }) {
  return (
    <div className="trailer-container">
      <h2>🎥 Official Trailer</h2>

      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${trailerId}`}
        title="Movie Trailer"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MovieTrailer;