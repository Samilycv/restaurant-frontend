import React from 'react'
import './RestCard.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
  

function RestCard({restaurants}) {
    console.log(restaurants);//array of data
  return (
    <div>
        <Link to={`view/${restaurants.id}`} style={{textDecoration:'none'}}>
        <MDBCard className='card'>
    <MDBCardImage className='img' src={restaurants.photograph} position='top' alt='...' />
    <MDBCardBody>
      <MDBCardTitle className='text-white'>{restaurants.name}</MDBCardTitle>
      <MDBCardText className='text'>
        Address:{restaurants.address}<br/>
        Cuisine type:{restaurants.cuisine_type}
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  </Link>
  </div>
  )
}

export default RestCard