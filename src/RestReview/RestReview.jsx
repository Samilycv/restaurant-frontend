import React from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


function RestReview({reviews,name, ...props}) {
    console.log(reviews);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
    <p variant="primary" onClick={handleShow} className="me-2">
    {name} Reviews
  </p>
  <Offcanvas show={show} onHide={handleClose} {...props}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Offcanvas</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      {
        reviews?.map(item=>(
           <div>
             <p>Name : {item.name}</p>
             <p>Date : {item.date}</p>
             <p>Comments : {item.comments}</p>
             <p>Rating : {item.rating}</p>
           </div>
        ))
      }
    </Offcanvas.Body>
  </Offcanvas>
  </>
  )
}

export default RestReview