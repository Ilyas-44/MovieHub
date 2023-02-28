import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './search.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Search = ({setMovies}) => 
 {
    const [keyword, setKeyword] = useState("");
    const [yearFrom, setYearFrom] = useState("");
    const [yearTo, setYearTo] = useState("");
    const [ratingFrom, setRatingFrom] = useState("");
    const [ratingTo, setRatingTo] = useState("");
  
    const handleSearch = async () => {


      

      const params = {
        Rating_gte: ratingFrom !== '' ? ratingFrom : 0,
        Rating_lte: ratingTo !== '' ? ratingTo : 10,
        Title_like: keyword,
        ReleaseDate_gte: yearFrom !== '' ? yearFrom : new Date('1700-01-01'),
        ReleaseDate_lte: yearTo !== '' ? yearTo : new Date(new Date().setFullYear(new Date().getFullYear() + 6))
      }

      const res = await axios.get('http://localhost:3000/movies', {
        params
      });

      const data = res?.data;

      setMovies(data);

      
    };
  
    const handleClear = () => {
      setKeyword("");
      setYearFrom("");
      setYearTo("");
      setRatingFrom("");
      setRatingTo("");
    };
  
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <nav className="sidebar">
      <div className="filter-header">
        <h3 className='fltr'>Filter Movies :</h3>
      </div>
      <div className="filter-form">
        <div className="filter-item">
          <label htmlFor="keyword">Keyword:</label> <br></br>
          <input
            type="text"
            id="keyword"
            placeholder='Title'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="filter-item">
          <label htmlFor="yearFrom">Year From:</label> <br></br>
          <input
            type="date"
            id="yearFrom"
            value={yearFrom}
            onChange={(e) => setYearFrom(e.target.value)}
          />
        </div>
        <div className="filter-item">
          <label htmlFor="yearTo">Year To:</label> <br></br>
          <input
            type="date"
            id="yearTo"
            value={yearTo}
            onChange={(e) => setYearTo(e.target.value)}
          />
        </div>
        <div className="filter-item">
          <label htmlFor="ratingFrom">Rating From:</label> <br></br>
          <input
            type="text"
            id="ratingFrom"
            placeholder='Rating from '
            value={ratingFrom}
            onChange={(e) => setRatingFrom(e.target.value)}
          />
        </div>
        <div className="filter-item">
          <label htmlFor="ratingTo">Rating To:</label> <br></br>
          <input
            type="text"
            id="ratingTo"
            placeholder='Rating to '

            value={ratingTo}
            onChange={(e) => setRatingTo(e.target.value)}
          />
        </div>
        <div className="filter-actions">
          <button className="filter-button" onClick={handleSearch}>
            Search
          </button>
          <button className="filter-button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
        <ul className="nav flex-column">
          <li className="nav-item">
          <button className="filter-button" >
            
                     <Link  className="" to="/login">  <i className="fa fa-fw fa-user"></i>Admin</Link>

            </button>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Search;
