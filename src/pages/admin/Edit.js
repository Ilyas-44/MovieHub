
import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";


const Edit = () => {
    const [movies , setMovie] = useState(
      null
    )
    const API_URL ="http://localhost:3000/movies"
    const navigate = useNavigate()
    const {id} = useParams()


    useEffect(()=>{
      const getMovieInfo = async ()=>{
        const {data} = await axios.get(`${API_URL}/${id}`)
        console.log('specific movie',data)
        setMovie(data)
      }
      getMovieInfo()
    },[id])
  
    const handleSave = async () => {
      console.log(movies)
      await axios.put(`${API_URL}/${movies.id}`,movies);
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
        edit MOVIES
      </h2> <br />
      <label htmlFor="" className="lbadd">Title</label> <br />
      <input type="text" className="inptadd" 
       value={movies?.Title}
       onChange={(e) => setMovie({...movies, Title: e.target.value})}
      /> <br />
      <label htmlFor="" className="lbadd">Description</label> <br />
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" 
        value={movies?.Synopsis}
        onChange={(e) => setMovie({...movies, Synopsis: e.target.value})}
        ></textarea>
<label htmlFor="" className="lbadd">TrailerId</label> <br />
     <input type="text" className="inptadd" placeholder="add trailer id" value={movies?.TrailerId} 
          onChange={(e) => setMovie({...movies, TrailerId: e.target.value})}

      /> <br />
     <label htmlFor="" className="lbadd">Duration</label> <br />
     <input type="text" className="inptadd"  value={movies?.Duration}
          onChange={(e) => setMovie({...movies, Duration: e.target.value})}

      /> <br />

     <label htmlFor="" className="lbadd">Image</label> <br />
     <input type="text" name="image" className='inptadd' value={movies?.Image}
          onChange={(e) => setMovie({...movies, Image: e.target.value})}
    
     
     /> <br />

     <label htmlFor="" className="lbadd">Release Date</label> <br />
     <input type="date" className="inptadd"  value={movies?.ReleaseDate?.split('T')[0]}
          onChange={(e) => setMovie({...movies, ReleaseDate: e.target.value})}
    
    /> <br />

     <label htmlFor="" className="lbadd">Rating</label> <br />
     <input type="text" className="inptadd"   value={movies?.Rating}
          onChange={(e) => setMovie({...movies, Rating: e.target.value})}
   
   /> <br />

     <label htmlFor="" className="lbadd">Country</label> <br />
     <input type="text" className="inptadd"  value={movies?.Country}
          onChange={(e) => setMovie({...movies, Country: e.target.value})}
       
       /> <br /> <br />

     <input type="button" value="Save" className='inptadd' onClick={handleSave}/> <br />
     <input type="button" value="Cancel" className='inptadd' onClick={handleCancel}/> <br />





      </form>
     
      
    </div>
  )
}

export default Edit
