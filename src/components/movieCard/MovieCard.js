import React from 'react'
import { Button, Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import "./MovieCard.css"
import { Link } from 'react-router-dom';
const MovieCard = ({Movie, filtermovie , handleDelete}) => {
 

  return (
   
    
   <div className='all'>
  
    <div className='movie'>
   
      <Card style={{ width: '18rem' , height:'550px'}} className='card'>
  <Card.Img variant="top"  src={Movie.posterUrl} height={300} width={200}/>
  <Card.Body>
    <Card.Title style={{color:"red"}}>{Movie.title}</Card.Title>
    <Card.Text>
     {Movie.description}
    </Card.Text>
    <Card.Text><ReactStars
    count={Movie.rating}
    // onChange={ratingChanged}
    edit ={false}
    size={24}
    activeColor="#ffff00"
    color="#ffd700"
  />
       </Card.Text>
       <Button  style={{color:'red',border:'none'}} onClick={()=>handleDelete(Movie.id) }>Delete</Button>
       <Link to={`/movies/${Movie.id}`}><Button variant="primary" style={{color:"red"}}  >Watch</Button></Link>
  </Card.Body>
</Card>

    </div>

   
   
    </div>
  )
}

export default MovieCard
