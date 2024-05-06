
// import { faClock, faDollarSign, faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Button, Card } from 'react-bootstrap';
// import './Card.css'

// const Plan = props => {
//       const stylePill = 'border rounded-pill px-2 py-1';
//       const date = new Date(props.startingDate);

//     return (
//         <Card style={{backgroundColor: "rgba(51, 72, 63, 0.54)" , color: "white" ,  borderRadius: "15px"}}>
//             <Card.Img variant="top" src={props.coverImageURL} />
//             <Card.Body>
//                 <Card.Title>{props.name}</Card.Title>
//                 <Card.Text style={{ color: 'white' }}>
//                     {props.shortDescription}
//                 </Card.Text>
//                 <div className="d-flex justify-content-between">
//                     <h6 className={stylePill}><FontAwesomeIcon icon={faClock} /> {props.tourDays} Day</h6>
//                     <h6 className={stylePill}><FontAwesomeIcon icon={faStar} /> {(props.rating).toFixed(1)}</h6>
//                     <h6 className={stylePill}><i class="fa-solid fa-indian-rupee-sign"/> {props.price}</h6>
//                 </div>
//                 <div className="d-flex justify-content-between align-items-center">
//                     <h4>{new Intl.DateTimeFormat(['ban', 'id']).format(date)}</h4>
//                     <Card.Link
//                         as={Button}
//                         variant="success"
//                         className="text-uppercase"
//                         onClick={() => {
//                             backToTop();
//                             history.push(`/plans/${props._id}`)
//                         }}
//                     >
//                         details
//                     </Card.Link>
//                 </div>
//             </Card.Body>
//         </Card>
//     );
// };

// export default Plan;
// import React, { useEffect, useState } from "react";

// const Plan = props => {
//   const [width, setWidth] = useState(0);
//   const [height, setHeight] = useState(0);
//   const [mouseX, setMouseX] = useState(0);
//   const [mouseY, setMouseY] = useState(0);
//   const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);

//     const handleMouseMove = (e) => {
//       setMouseX(e.pageX - cardRef.current.offsetLeft - width / 2);
//       setMouseY(e.pageY - cardRef.current.offsetTop - height / 2);
//     };
  
//     const handleMouseEnter = () => {
//       clearTimeout(mouseLeaveDelay);
//     };
  
//     const handleMouseLeave = () => {
//       setMouseLeaveDelay(
//         setTimeout(() => {
//           setMouseX(0);
//           setMouseY(0);
//         }, 1000)
//       );
//     };

//     const cardRef = React.createRef();

//     const mousePX = mouseX / width;
//     const mousePY = mouseY / height;
//     const card=document.querySelector('.card');
//     const bg=document.querySelector('.card-bg');
  
//     const cardStyle =()=> {
//       card.transform= `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`
//     };
  
//     const cardBgTransform =()=> {
//       bg.transform= `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`
//     };
  
//     const cardBgImage = {
//       backgroundImage: `url(${props.coverImageURL})`,
//     };
//     useEffect(()=>{
//       // cardStyle();
//       // cardBgTransform();
//     })

//   return (
//     <div
//       className="card-wrap"
//       onMouseMove={handleMouseMove}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       ref={cardRef}
//     >
//       <div className="card" style={cardStyle}>
//         <div className="card-bg" style={{ ...cardBgTransform, backgroundImage: `url(${props.coverImageURL})` , backgroundSize: "cover", margin: "0px", padding: "0px" }}></div>
//         <div className="card-info">
//           <h1 className="card-header">{props.name}</h1>
//           <p className="card-content">{props.shortDescription}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Plan;



//NEWWWWW 

import { useHistory } from 'react-router';
import { backToTop } from '../../../utilities/utilities';

import './Card.css';
import React, { useState, useRef, useEffect } from 'react';

const Plan = props => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);
  const cardRef = useRef(null);
  const history = useHistory();

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const mouseX = e.pageX - card.offsetLeft - cardWidth/2 ;
    const mouseY = e.pageY - card.offsetTop - cardHeight/2 ;
    setMouseX(mouseX);
    setMouseY(mouseY);
    console.log(props);
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const handleMouseLeave = () => {
    setMouseLeaveDelay(setTimeout(()=>{
      setMouseX(0);
      setMouseY(0);
    }, 1000));
  };

  const cardStyle = {
    transform: `rotateY(${mouseX / width * 30}deg) rotateX(${-mouseY / height * 30}deg)`
  };

  const cardBgTransform = {
    transform: `translateX(${mouseX / width * - 40}px) translateY(${mouseY / height * - 40}px)`
  };

  useEffect(() => {
    setWidth(cardRef.current.offsetWidth);
    setHeight(cardRef.current.offsetHeight);
  }, []);

  return (
    <div className="pcard-wrap"
         onMouseMove={handleMouseMove}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         ref={cardRef}
         onClick={() => {
          backToTop();
          history.push(`/plans/${props._id}`)
      }}>
      <div className="pcard" style={cardStyle}>
        <div className="pcard-bg" style={{ ...cardBgTransform, backgroundImage: `url(${props.coverImageURL})` }}></div>
        <div className="pcard-info">
          <h1>{props.name}</h1>
          <h5>{props.shortDescription}</h5>
        </div>
      </div>
    </div>
  );
};

export default Plan;
