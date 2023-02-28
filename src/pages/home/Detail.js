import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './detail.css';
import "react-bootstrap"

const imgt = "/img/";
const API_URL = "http://localhost:3000/movies";
const vdt ="https://www.youtube.com/embed/";


const Detail = ({ }) => {
  const [movie, setMovie] = useState(null);
  const {id} = useParams()
  useEffect(() => {
    const getMovieInfo = async () => { 
        const response = await axios.get(`${API_URL}/${id}`);
        const data = response.data;
        console.log(`specific movie`, data);
        setMovie(data);
    };

    getMovieInfo();
  }, [id]);
  if (movie===null) {
    return <div>Loading...</div>;
  }
  const { Title,Image, Rating, Country, ReleaseDate, Synopsis, TrailerId } = movie;
  return (
    <div className="container333">
    <div className="row mt-4">
      <div className="col-md-4">
        <img className="card-img-top" src={Image?.includes('http') ? Image : imgt + Image} alt="movie poster" />
      </div>
      <div className="col-md-8">
        <h1>Title: {Title}</h1>
        <h2 className="mb-3">Rating: {Rating}</h2>
        <h2 className="mb-3">Country: {Country}</h2>
        <h2 className="mb-3">Release Date: {ReleaseDate}</h2>
        <h2 className="mb-3">Overview</h2>
        <p>{Synopsis}</p>
      
      </div>
      <h3>WATCH TRAILER :</h3> <br></br> <br></br>
      <div className="embed-responsive embed-responsive-16by9">
        
          <iframe className="embed-responsive-item" src={ vdt+TrailerId} allowFullScreen title="YouTube video player"></iframe>
          
        </div>
    </div>
    
  </div>
  
  );
};
export default Detail;
