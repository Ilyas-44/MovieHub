import Navbar from "../nav/Navbar";
import React, { Component } from "react";
import "./admin.css";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Users() {
  const API_URLus ="http://localhost:3000/users";
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    fetch(API_URLus)
      .then((res)=>res.json())
      .then(data=>{
        setUsers(data);
        console.log(data)
      });
  }, []);

  console.log('users',users)

  // calculate total number of pages
  const totalPages = Math.ceil(users.length / 11);

  // slice users array to render only current page's users
  const usersToRender = users.slice((currentPage - 1) * 11, currentPage * 11);

  return (
    <div>
      <div class="d-grid gap-2">
        <table className="table table-striped table-dark">
          <thead class="thead-light">
            <tr>
              <th scope="col">USENAME</th>
              <th scope="col">PASSWORD</th>
              <th scope="col">age</th>
              <th scope="col">Edit</th>

            </tr>
          </thead>
          <tbody>
            {usersToRender.map((infor) => (
              <tr key={infor.id}>
                <td>{infor.name}</td>
                <td>{infor.password}</td>
                <td>{infor.age}</td>
                <td>  <Link to={`/admin/EditUs/${infor.id}`}>
                      <button class="btn btn-outline-light" type="button">
                      <i class="material-icons">edit</i>

                      </button>
                      </Link >
                      <Link to={`/admin/DeleteUs/${infor.id}`} rel="stylesheet"  >
                      <button class="btn btn-outline-light" type="button">
                     
                      <i class="material-icons">delete</i>
                      </button>
                      </Link></td>

              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagin">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
             <div className="pgt">
            <button className="btn btn-outline-secondary text-light border"
              key={page}
              onClick={() => setCurrentPage(page)}
              disabled={currentPage === page}
            >
              {page}
            </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
