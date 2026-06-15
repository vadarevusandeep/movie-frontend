import { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.get("/users", {
        params: {
          email: email.trim(),
        },
      });

      const user = response.data[0];

      if (user && user.password === password.trim()) {
        localStorage.setItem(
          "user",
          JSON.stringify(user)
        );

        alert("Login Successful");

        navigate("/");
        window.location.reload();
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1>Movie Explorer Login</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button
            type="submit"
            className="auth-btn"
          >
            Login
          </button>

        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;