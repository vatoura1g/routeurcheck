
import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const MovieAdd = ({handleAdd}) => {
    
    const [text, setText] = useState({  title:"",
    id:Math.random(),
    description:"",
    posterUrl:"",
    rating:0})
    const handleSumbit = (e) =>{
        setText({...text,[e.target.name] : e.target.value})
    }
  return (
    <div className='add'>
       
      <Modal.Dialog className='add1' >
  <Modal.Header closeButton>
    <Modal.Title style={{color:'orange'}}>Add new movie</Modal.Title>
  </Modal.Header>

  <Modal.Body>
      <table>
    <div>
        <div>
           <td> 
             <label className='input' >Title:</label></td>
            <td><input type="text" name='title' onChange={handleSumbit}  /></td>
        </div>
        <div>
           <td> <label className='input'>Image:</label></td>
           <td><input type="text" name='posterUrl' onChange={handleSumbit} /></td>
        </div>
        <div>
        <td> <label className='input'>Description:</label></td>
        <td> <input type="text" name='description'onChange={handleSumbit} /></td>
        </div>
        <div>
        <td><label className='input'>Rating:</label></td>
        <td> <input type="Number" name='rating'onChange={handleSumbit} /></td>
        </div>
    </div>
    </table>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary"style={{color:"black"}}>Close</Button>
    <Button variant="primary" style={{color:"black"}} onClick={()=>{handleAdd(text)}} >Add</Button>
  </Modal.Footer>
</Modal.Dialog>


    </div>
  )
}

export default MovieAdd