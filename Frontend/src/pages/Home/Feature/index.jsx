
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

// const Feature = () => {
//     const history = useHistory();
//     return (
//         <div style={{ backgroundColor: '#9dcfce' }}>
//             <Container>
//                 <Row xs={1} lg={2} className="align-items-center">
//                     <Col className="pt-4 pt-lg-0">
//                         <h4 className="text-uppercase">World is beautiful</h4>
//                         <p>Someone says, "<span className="fst-italic">The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.</span>" This is what we want to felt you. Please join if you don't wanna miss our next tip.</p>
//                         <Button
//                             variant="success"
//                             size="sm"
//                             className="text-uppercase"
//                             onClick={() => history.push('/plans')}
//                         >buy a tickt now</Button>
//                     </Col>
//                     <Col>
//                         <Image
//                             src="https://i.ibb.co/hfPWQT6/feature-img.jpg"
//                             alt=""
//                             fluid
//                             className="pt-4"
//                         />
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// };

// export default Feature;



import React from 'react';
import nat1 from '../../../img/nat-1.jpg';
import natl1 from '../../../img/nat-1-large.jpg';
import nat2 from '../../../img/nat-2.jpg';
import natl2 from '../../../img/nat-2-large.jpg';
import nat3 from '../../../img/nat-3.jpg';
import natl3 from '../../../img/nat-3-large.jpg';
import './About.css'

const About = () => {
    const history = useHistory();
  return (
    <main className="section">
    <section className="section-about">
      <div className="u-center-text u-bottom-margin-8">
        <h2 className="heading-secondary">Exciting tours for adventurous people</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-ter u-bottom-margin-1-5">You are going to fall in love with nature</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper non risus et 
            vehicula. Aliquam libero eros, tincidunt vitae volutpat vitae, hendrerit id diam. 
            Vivamus faucibus purus quis risus viverra sodales. Quisque in ante a lacus ultricies 
            vulputate. Morbi rhoncus, risus in tristique egestas, eros sapien laoreet dui, 
            in placerat nisl diam vel diam.
          </p>
          <h3 className="heading-ter u-bottom-margin-1-5">Live adventures like you never have before</h3>
          <p className="paragraph">
            Aliquam ullamcorper est vitae aliquam lobortis. Donec consequat ipsum at nulla 
            pellentesque, nec sodales elit commodo. Nunc viverra leo enim, in eleifend metus 
            tempor ac. Integer pellentesque eros ultricies, aliquet velit ac, egestas tellus. 
            Phasellus vitae ipsum et libero euismod placerat. Morbi id posuere mauris.
          </p>

          <a className="btn-text" href="#"  onClick={() => history.push('/plans')}>
            Buy a Trip now &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
          <img
              srcSet={`${nat1} 300w, ${natl1} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 1"
              className="composition_photo composition_photo--p1"
              src={natl1}
            />

            <img
              srcSet={`${nat2} 300w, ${natl2} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 2"
              className="composition_photo composition_photo--p2"
              src={natl2}
            />

            <img
              srcSet={`${nat3} 300w, ${natl3} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 3"
              className="composition_photo composition_photo--p3"
              src={natl3}
            />       
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default About;
