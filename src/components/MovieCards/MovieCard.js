import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MoiveCard.css';
import { useNavigate } from "react-router";

function MovieCard(props) {
    const navigate = useNavigate();
    const proceedToSelectSeats=()=>{
        navigate("/selectSeats");
    }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgUrl} />
      <Card.Body className='cardBody'>
        <Card.Title className='cardTitle'>{props.title}</Card.Title>
        <Card.Text className='cardDesc'>
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={proceedToSelectSeats}>Book Ticket</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;