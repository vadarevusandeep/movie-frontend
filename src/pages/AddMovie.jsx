import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddMovie() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    image: "",
    description: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/movies", formData);

    navigate("/movies");
  }

  return (
    <div className="form-container">
      <h2>Add Movie</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Movie Title"
          onChange={handleChange}
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Poster URL"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <button className="submit-btn">
          Add Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovie;