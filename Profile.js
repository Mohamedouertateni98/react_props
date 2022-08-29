import Card from 'react-bootstrap/Card';
import './Profile.css'




function Profile (props){
    return(
        <Card className='mycard' >
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.fullname}</Card.Title>
        <h2>{props.profession}</h2> 
        <Card.Text>
          {props.bio}
          
        </Card.Text>
       
      </Card.Body>
    </Card>
        
        
      
    );
}
export default Profile;