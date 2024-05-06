import React from 'react';
import './Features.css';

function Features() {
  return (
    <div className="featmain">
    <section className="section-features" id="benefits">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
           <i class="feature-box__icon fa fa-globe"></i>
            <h3 className="heading-ter u-margin-bottom-small headf">Explore the world</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi et maxime quia ea voluptatibus obcaecati.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
          <i class="feature-box__icon fa-regular fa-compass"></i>
            <h3 className="heading-ter u-margin-bottom-small headf">Meet nature</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ea suscipit soluta consequuntur illum.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
          <i class="feature-box__icon fa-regular fa-map"></i>
            <h3 className="heading-ter u-margin-bottom-small headf">Find your way</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, inventore voluptas dolorem delectus.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
          <i class="feature-box__icon fa-regular fa-heart"></i>
            <h3 className="heading-ter u-margin-bottom-small headf">Live a healthier life</h3>
            <p className="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi et maxime quia ea voluptatibus obcaecati.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Features;