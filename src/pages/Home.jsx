function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Movie Explorer</h1>

          <p>
            Discover the latest blockbusters, timeless classics,
            and your favorite South Indian movies all in one place.
          </p>

          <a href="/movies" className="hero-btn">
            Explore Movies
          </a>
        </div>
      </section>

      <section className="features">
        <h2>Why Movie Explorer?</h2>

        <div className="feature-cards">
          <div className="feature-card">
            <h3>🎬 Movie Collection</h3>
            <p>
              Browse a collection of popular Telugu,
              Tamil, Kannada and Malayalam movies.
            </p>
          </div>

          <div className="feature-card">
            <h3>⭐ Ratings</h3>
            <p>
              Check ratings and discover highly
              recommended movies.
            </p>
          </div>

          <div className="feature-card">
            <h3>📖 Details</h3>
            <p>
              View complete information including
              genre, duration and director.
            </p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-box">
          <h2>10+</h2>
          <p>Popular Movies</p>
        </div>

        <div className="stat-box">
          <h2>5+</h2>
          <p>Genres</p>
        </div>

        <div className="stat-box">
          <h2>100%</h2>
          <p>Entertainment</p>
        </div>
      </section>
    </>
  );
}

export default Home;