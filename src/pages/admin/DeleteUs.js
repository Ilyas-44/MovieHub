import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const DeleteUs = () => {
    const API_URL = "http://localhost:3000/users";
    const navigate = useNavigate();
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
  
    const handleshow = () => {
      setShowModal(true);
    };
  
    const handleCancel = () => {
      setShowModal(false);
    };
  
    const handleDelete = async (id) => {
      await axios.delete(`${API_URL}/${id}`);
      navigate('/admin/users');
      setShowModal(false);
    };
  
    
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h2>
            ARE YOU SURE YOU WANT TO DELETE THIS User ?

        </h2>
        <br></br>
     <br></br>
      <Button variant="danger" onClick={handleshow}>Yes Delete</Button>
      <Modal animation={false} show={showModal} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  )
}

export default DeleteUs
