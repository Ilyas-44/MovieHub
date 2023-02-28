import React, { useEffect, useState } from "react";
import './home.css';
import MovieBox from "./MovieBox";
import { Link , Outlet} from "react-router-dom";
import Search from "./Search";

const API_URL ="http://localhost:3000/movies"

function Home() {
  const [movies, setMovies]=useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(14);

  useEffect(() => {
    fetch(API_URL)
      .then((res)=>res.json())
      .then(data=>{
        setMovies(data);
      });
  }, []);

  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
     <nav class="navbar  navbar-dark ">
       <h1 className="DATA"> MOVIES DATA </h1>

    </nav>
  <div className="container">
 
    <div className="srh"> 
      <Search setMovies={setMovies} />

    </div>
    <nav className="pagin">
<ul className="pagination"><li>
<div className="pgt">
          {Array.from({ length: Math.ceil(movies.length / moviesPerPage) }, (_, i) => i + 1).map((pageNumber) => (
            <button className="btn btn-outline-secondary text-light border " key={pageNumber} onClick={() => paginate(pageNumber)}>
              {pageNumber}
            </button>
          ))}
        </div></li></ul>
        </nav>
    <br></br> 
    <hr></hr>
        <div className="grid">
                {currentMovies?.length ?
              

                currentMovies.map((movieReq) =>
                <MovieBox key={movieReq.id} {...movieReq}/>)
                
                :
                <>
                

                 <h1>                   <i class="material-icons">refresh</i>
loading ...</h1></>}
     
        </div>

      
    

</div>
<hr></hr>
<nav className="pagin">
<ul className="pagination"><li>
<div className="pgt">
          {Array.from({ length: Math.ceil(movies.length / moviesPerPage) }, (_, i) => i + 1).map((pageNumber) => (
            <button className="btn btn-outline-secondary text-light border " key={pageNumber} onClick={() => paginate(pageNumber)}>
              {pageNumber}
            </button>
          ))}
        </div></li></ul>
        </nav>
        <br></br>
    </>
  );
}

export default Home;
