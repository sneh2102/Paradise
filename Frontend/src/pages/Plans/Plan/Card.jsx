import { faClock, faDollarSign, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card } from 'react-bootstrap';
import './Card.css'
import { React } from 'react'

const Card = props => {
      const stylePill = 'border rounded-pill px-2 py-1';
      const date = new Date(props.startingDate);

    return (
        <Card style={{backgroundColor: "rgba(51, 72, 63, 0.54)" , color: "white" ,  borderRadius: "15px"}}>
            <Card.Img variant="top" src={props.coverImageURL} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text style={{ color: 'white' }}>
                    {props.shortDescription}
                </Card.Text>
                <div className="d-flex justify-content-between">
                    <h6 className={stylePill}><FontAwesomeIcon icon={faClock} /> {props.tourDays} Day</h6>
                    <h6 className={stylePill}><FontAwesomeIcon icon={faStar} /> {(props.rating).toFixed(1)}</h6>
                    <h6 className={stylePill}><i class="fa-solid fa-indian-rupee-sign"/> {props.price}</h6>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <h4>{new Intl.DateTimeFormat(['ban', 'id']).format(date)}</h4>
                    <Card.Link
                        as={Button}
                        variant="success"
                        className="text-uppercase"
                        onClick={() => {
                            backToTop();
                            history.push(`/plans/${props._id}`)
                        }}
                    >
                        details
                    </Card.Link>
                </div>
            </Card.Body>
        </Card>
    );
};
export default Card;