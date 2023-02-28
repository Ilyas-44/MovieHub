import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Movies.css";

const Movies = () => {
  const API_URL = "http://localhost:3000/movies";
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 11;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  const pageCount = Math.ceil(movies.length / pageSize);
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mvss">
      <div className="d-grid gap-2">
        <Link to="/admin/Add_movies">
          <button class="btn btn-outline-dark text-light" type="button">
            ADD FILM
          </button>
        </Link>

        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Duration</th>
              <th scope="col">Country</th>
              <th scope="col">EDIT</th>
             
            </tr>
          </thead>
          <tbody>
            {movies
              .slice((currentPage - 1) * pageSize, currentPage * pageSize)
              .map((infor) => {
                return (
                  <tr key={infor.id}>
                    <td>{infor.Title}</td>
                    <td>{infor.Duration}</td>
                    <td>{infor.Country}</td> 
                    <td>
                    <Link to={`/admin/Edit/${infor.id}`}>
                      <button class="btn btn-outline-light" type="button">
                      <i class="material-icons">edit</i>

                      </button>
                      </Link >
                      <Link to={`/admin/Delete/${infor.id}`} rel="stylesheet"  >
                      <button class="btn btn-outline-light" type="button">
                     
                      <i class="material-icons">delete</i>
                      </button>
                      </Link>
                    </td>
                    
                  </tr>
                );
              })}
          </tbody>
        </table>

        <nav className="pagin">
          <ul className="pagination">
            {pages.map((page) => (
              <li
                key={page}
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <div className="pgt"><button
                  className="btn btn-outline-secondary text-light border "
                  onClick={() => handleClick(page)}
                >
                  {page}
                </button></div>
                
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Movies;
