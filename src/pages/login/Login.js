import React, { useState } from "react";
import "./login.css";
import validation from "./validation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../nav/Navbar";
import { Link } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState({
    email: null,
    pass: null,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const response = await axios.get(`http://localhost:3000/admin?email=${email}&password=${password}`);
      if (response.data.length > 0) {
        navigate("/admin");

      } else {
        alert('Username or password not found!');
      }
      const errs = validation(email, password);
      setError(errs);
      if (errors.email !== null || errors.password !== null) return;

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
<Navbar bg="dark" expand="lg" variant="dark"/>
    <div className="cnt">
  
     
        <form className="frmlg" onSubmit={handleSubmit}>
         <h1>HELLO ADMIN</h1>
          <div>
            <label className="lbllg" htmlFor="email">Email :</label>
          </div>
          <div>
            <input className="inptlg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
          </div>
          {errors.email && (
            <p style={{ color: "red", fontSize: "13px" }}>{errors.email}</p>
          )}
          <div>
            <label className="lbllg" htmlFor="password">Password :</label>
          </div>
          <div>
            <input className="inptlg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="*******"
              id="password"
              name="password"
            />
          </div>
          {errors.pass && (
            <p style={{ color: "red", fontSize: "13px" }}>{errors.pass}</p>
          )}
          <div>
          <Link to="/">i'm not admin </Link>

            <button type="submit" class="btn btn-outline-dark text-light">Log in</button>
          </div>
        </form>
      
     
    </div>
    <div className="footer"></div>
    </>
  );
}
