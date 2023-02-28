import { Button, show, Modal } from "react-bootstrap";
import React,{useState} from "react";
import './Movibox.css';
import { Link } from "react-router-dom";
// import movies from "./database.json";


// const API_IMG = "https://image.tmdb.org/t/p/w500";
const imgt="img/";
const MovieBox = ({Title,id,Duration,Image,ReleaseDate,Rating,Country,Synopsis}) => { 
    const [show, setShow]=useState(false);
    
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);

  return (
    <div className="card text-center bg-transparent mb-3">
      <Link to={`/Detail/${id}`} >        
      <img className="card-img-top" src={Image?.includes('http') ? Image :  imgt+Image} />
</Link>
        <div className="card-body">

          <div class="d-grid gap-2">
  <button class="btn btn-outline-dark text-white" type="button" onClick={handleShow}>View More</button>
 
        </div>
           
        
          <Modal className="modal" animation={false}  show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                <h2>{Title}</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img className="card-img-top" src={Image?.includes('http') ? Image :  imgt+Image} />
            
            <h2>Rating: </h2>
            <h3>{Rating}</h3>
            <h2>country: </h2>
            <h3>{Country}</h3>
            <h2>Release Date : </h2>
            <h3>{ReleaseDate}</h3>
            <br></br>
            <h2>Overview</h2>
            <b>{Synopsis}</b>
            </Modal.Body>
      
          </Modal>
        </div>

    </div>
  );
};
export default MovieBox;
