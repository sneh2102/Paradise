import React from 'react'
import vid from '../../../img/video.mp4';
import vid2 from '../../../img/video.mp4';
import nat8 from '../../../img/nat-8.jpg';
import nat9 from '../../../img/nat-9.jpg';
import './Reviews.css'
import { Link } from 'react-router-dom';

const Reviews = () => {
  return (
    <>
    <section className="section-stories" id="stories">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src={vid} type="video/mp4"/>
                        <source src={vid2} type="video/webm"/>
                        Your browser is not supported
                    </video>
                </div>

                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        We make people genuinely happy
                    </h2>
                </div>

                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src={nat8} alt="Person on a tour" className="story__image"/>
                            <figcaption className="story__caption">Kari Scott</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis velit necessitatibus saepe cum ipsum reiciendis minus, 
                                quisquam sapiente officia maiores possimus dolorum assumenda sed, reprehenderit commodi ab rerum iusto modi? Lorem ipsum dolor,  
                                officiis obcaecati commodi qui ex. Voluptates adipisci molestias autem voluptatem illum voluptatibus, itaque minus rem quos eius!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src={nat9} alt="Person on a tour" className="story__image"/>
                            <figcaption className="story__caption">Soham Desai</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">WOW! My life is completely diffrent now</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis velit necessitatibus saepe cum ipsum reiciendis minus, 
                                quisquam sapiente officia maiores possimus dolorum assumenda sed, reprehenderit commodi ab rerum iusto modi? Lorem ipsum dolor,  
                                officiis obcaecati commodi qui ex. Voluptates adipisci molestias autem voluptatem illum voluptatibus, itaque minus rem quos eius!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="u-center-text u-margin-top-huge">
                    <Link to href="/plans" className="btn-text">Read all stories &rarr;</Link>
                </div>
</section>
</>
  )
}

export default Reviews
