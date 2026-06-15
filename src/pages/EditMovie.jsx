import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditMovie() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    image: "",
    description: ""
  });

  useEffect(() => {
    getMovie();
  }, []);

  async function getMovie() {
    const response = await api.get(`/movies/${id}`);

    setFormData(response.data);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.put(`/movies/${id}`, formData);

    navigate("/movies");
  }

  return (
    <div className="form-container">
      <h2>Edit Movie</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button className="submit-btn">
          Update Movie
        </button>
      </form>
    </div>
  );
}

export default EditMovie;