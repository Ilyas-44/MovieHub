import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import './addmvs.css' ;



function Add_movies() {
  const [movies , setMovie] = useState(  )
  const API_URLa ="http://localhost:3000/movies"
  const navigate = useNavigate()

  const handleSave = async () => {
    console.log(movies)
    const newMovie = {...movies,id : new Date().getTime()}
    const {data} = await axios.post(API_URLa,movies)
    navigate('/admin')
  };
  
    
  
    const handleCancel = () => {
      // Cancel logic goes here
      navigate('/admin')
    };

  return (
    <div className='add'>
      <form action="" className='formadd'> 
      <h2>
        ADD MOVIES
      </h2> <br />
      <label htmlFor="" className="lbadd">Title</label> <br />
      <input type="text" className="inptadd" placeholder="write the title of the movie" 
       value={movies?.Title}
       onChange={(e) => setMovie({...movies, Title: e.target.value})}
      /> <br />
      <label htmlFor="" className="lbadd">Description</label> <br />
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="add a description here"
        value={movies?.Synopsis}
        onChange={(e) => setMovie({...movies, Synopsis: e.target.value})}
        ></textarea>

<label htmlFor="" className="lbadd">TrailerId</label> <br />
     <input type="text" className="inptadd" placeholder="add trailer id" value={movies?.TrailerId} 
          onChange={(e) => setMovie({...movies, TrailerId: e.target.value})}

      /> <br />

     <label htmlFor="" className="lbadd">Duration</label> <br />
     <input type="text" className="inptadd" placeholder="how long is this movie!" value={movies?.Duration} 
          onChange={(e) => setMovie({...movies, Duration: e.target.value})}

      /> <br />
   <label htmlFor="" className="lbadd">Image</label> <br />
     <input type="text" name="image" placeholder="http......" className='inptadd' value={movies?.Image}
          onChange={(e) => setMovie({...movies, Image: e.target.value})}
    
     
     />
     <br />

     <label htmlFor="" className="lbadd">Release Date</label> <br />
     <input type="date" className="inptadd"  value={movies?.ReleaseDate}
          onChange={(e) => setMovie({...movies, ReleaseDate: e.target.value})}
    
    /> <br />

     <label htmlFor="" className="lbadd">Rating</label> <br />
     <input type="text" className="inptadd" placeholder="rate this movie"  value={movies?.Rating}
          onChange={(e) => setMovie({...movies, Rating: e.target.value})}
   
   /> <br />

     <label htmlFor="" className="lbadd">Country</label> <br />
     <input type="text" className="inptadd"  value={movies?.Country}
          onChange={(e) => setMovie({...movies, Country: e.target.value})}
       
       /> <br /> <br />

     <input type="button" value="Save" className='btn btn-lg bg-dark btn-outline-light' onClick={handleSave}/> <br />
     <input type="button" value="Cancel" className='btn btn-lg bg-dark btn-outline-light' onClick={handleCancel}/> <br />





      </form>
     
    </div>
  )
}

export default Add_movies
