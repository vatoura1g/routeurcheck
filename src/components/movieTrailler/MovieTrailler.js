import React from 'react'
import { Button } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

import { Link } from 'react-router-dom'


const MovieTrailler = ({match,movieData}) => {
   
    const movie= movieData.find(elt=> elt.id == match.params.id)
    console.log(match.params.id)
  return (

    <div>
      
      <h3 > {movie.title} </h3>

<img src={movie.posterUrl} alt=""
 height="350"
 width="450" />
 <p > {movie.description} </p>
 <p ><strong>Type :</strong> {movie.type}</p>
 <p><ReactStars
count={movie.rating}
// onChange={ratingChanged}
edit ={false}
size={24}
activeColor="#ffff00"
color="#ffd700"
/> </p>
<iframe width="653" height="380" src={movie.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<Link to="/"><Button variant="primary"  style={{color:"black"}} >Go Back Home</Button></Link>
    </div>
  )
}

export default MovieTrailler
