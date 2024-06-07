import React from 'react'
import MainScreen from '../../component/MainScreen'
import { Link } from 'react-router-dom'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import notes from '../../data/notes'

const MyNotes = () => {
  const deleteHandler = (id) =>{
    if(window.confirm("Are you sure?")){

    }
  }
  return (
    <MainScreen title='Welcome Back Divyanshi...'>
      <Link to='createnote'>
        <Button style={{marginLeft: 10 , marginBottom: 6}} >
          Create New Note
        </Button>
      </Link> 
      {
        notes.map((note) =>(

          <Accordion>
            <Accordion.Item eventKey='0'>
          <Card  style={{margin:10}}>
          <CardHeader style={{display:"flex"}}>
            <span  style={{
              color:"black",
              textDecoration:"none",
              flex:1,
              cursor:"pointer",
              alignSelf:"center",
              fontSize:18,
            }}
            >
              <Accordion.Button as={Card.Text} variant="link" eventKey="0">
                  {note.title}
              </Accordion.Button>
              </span>
            <div>
             <Button href={`/note/${note._id}`}>Edit</Button>
             <Button variant='danger' className='mx-2'
             onClick={() => deleteHandler(note._id)}
             >Delete</Button>
          </div>
          </CardHeader>
          <Accordion.Collapse eventKey='0'>
         <Card.Body>
          <h4 variant="danger" style={{color:"white"}}>
            <Badge bg='success'>
              Category - {note.category}
            </Badge>
          </h4>  
          <blockquote className='blockquote mb-0'>
            <p>
            {note.content}
            </p>
            <footer className='blockquote-footer'>
            Created on - date
            </footer>
          </blockquote>

         </Card.Body>
         </Accordion.Collapse>
        </Card>
        </Accordion.Item>
        </Accordion>
        ))
      }
        
    </MainScreen>
  )
}

export default MyNotes