import React from 'react'
import './Banner.css'
import {useState,useEffect} from 'react'
import bgmg from '../../../img/background.png';
import blackShadow from '../../../img/black_shadow.png';
import fg1 from '../../../img/fog_1.png';
import fg2 from '../../../img/fog_2.png';
import fg3 from '../../../img/fog_3.png';
import fg4 from '../../../img/fog_4.png';
import fg5 from '../../../img/fog_5.png';
import fg6 from '../../../img/fog_6.png';
import fg7 from '../../../img/fog_7.png';
import m1 from '../../../img/mountain_1.png';
import m2 from '../../../img/mountain_2.png';
import m3 from '../../../img/mountain_3.png';
import m4 from '../../../img/mountain_4.png';
import m5 from '../../../img/mountain_5.png';
import m6 from '../../../img/mountain_6.png';
import m7 from '../../../img/mountain_7.png';
import m8 from '../../../img/mountain_8.png';
import m9 from '../../../img/mountain_9.png';
import m10 from '../../../img/mountain_10.png';
import sr from '../../../img/sun_rays.png';
import {Link} from 'react-router-dom'


// export default function Parallax() {
//   const [xValue, setXValue] = useState(0);
//   const [yValue, setYValue] = useState(0);
//   const [rotateDegree, setRotateDegree] = useState(0);

//   const update = (cursorPosition) => {
//     const parallaxEl = document.querySelectorAll(".parallax");

//     parallaxEl.forEach((el) => {
//       const speedx = el.dataset.speedx;
//       const speedy = el.dataset.speedy;
//       const speedz = el.dataset.speedz;
//       const rotateSpeed = el.dataset.rotate;

//       const isInLeft =
//         parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

//       const zValue =
//         (cursorPosition - parseFloat(getComputedStyle(el).left)) *
//         isInLeft * 0.1;

//       el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed}deg)`;
//     });
//   };
 
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setXValue(e.clientX - window.innerWidth / 2);
//       setYValue(e.clientY - window.innerHeight / 2);

//       setRotateDegree((xValue / (window.innerWidth / 2)) * 20);
//       update(e.clientX);
//     };

    

//     update(0);
//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
    
//   });


//   return (
//     <main>
//       <div className="vignette"></div>
//       <img src={bgmg} data-speedx="0.3" data-speedy="0.38" data-speedz="0" data-rotate="0" className="parallax bg-img" alt="img"/>
//       <img src={fg7} data-speedx="0.27" data-speedy="0.32" data-speedz="0" data-rotate="0" className="parallax fog-7" alt="img"/>
//       <img src={m10} data-speedx="0.195" data-speedy="0.305" data-speedz="0" data-rotate="0" className="parallax mountain-10" alt="img"/>
//       <img src={fg6} data-speedx="0.25" data-speedy="0.28" data-speedz="0" data-rotate="0" className="parallax fog-6" alt="img"/>
//       <img src={m9} data-speedx="0.125" data-speedy="0.155" data-speedz="0.15" data-rotate="0.02" className="parallax mountain-9" alt="img"/>
//       <img src={m8} data-speedx="0.1" data-speedy="0.11" data-speedz="0" data-rotate="0.02" className="parallax mountain-8" alt="img"/>
//       <img src={fg5} data-speedx="0.16" data-speedy="0.105" data-speedz="0" data-rotate="0" className="parallax fog-5" alt="img"/>
//       <img src={m7} data-speedx="0.1" data-speedy="0.1" data-speedz="0" data-rotate="0.09" className="parallax mountain-7" alt="img"/>
//       <div className="text parallax" data-speedx="0.07" data-speedy="0.07" data-rotate="0.11" data-speedz="0">
//         <h2>India</h2>
//         <h1>Matheran</h1>
//     </div>
//         <img src={m6} data-speedx="0.065" data-speedy="0.05" data-speedz="0.05" data-rotate="0.12" className="parallax mountain-6" alt="img"/>
//         <img src={fg4} data-speedx="0.135" data-speedy="0.05" data-speedz="0" data-rotate="0" className="parallax fog-4" alt="img"/>
//         <img src={m5} data-speedx="0.08" data-speedy="0.035" data-speedz="0.13" data-rotate="0.1" className="parallax mountain-5" alt="img"/>
//         <img src={fg3} data-speedx="0.11" data-speedy="0.018" data-speedz="0" data-rotate="0" className="parallax fog-3" alt="img"/>
//         <img src={m4} data-speedx="0.059" data-speedy="0.024" data-speedz="0.35" data-rotate="0.14" className="parallax mountain-4" alt="img"/>
//         <img src={m3} data-speedx="0.04" data-speedy="0.018" data-speedz="0.32" data-rotate="0.145" className="parallax mountain-3" alt="img"/>
//         <img src={fg2} data-speedx="0.15" data-speedy="0.0115" data-speedz="0" data-rotate="0" className="parallax fog-2" alt="img"/>
//         <img src={m2} data-speedx="0.0225" data-speedy="0.013" data-speedz="0.42" data-rotate="0.15" className="parallax mountain-2" alt="img"/>
//         <img src={m1} data-speedx="0.025" data-speedy="0.018" data-speedz="0.53" data-rotate="0.2" className="parallax mountain-1" alt="img"/>
//         <img src={sr} className="sun-rays" alt="img"/>
//         <img src={blackShadow} className="black-shadow" alt="img"/>
//         <img src={fg1} data-speedx="0.12" data-speedy="0.01" data-speedz="0" data-rotate="0.1" className="parallax fog-1" alt="img"/>
//     </main>
//   )
// }


export default function Parallax() {
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [rotateDegree, setRotateDegree] = useState(0);

  const update = (cursorPosition) => {
    const parallaxEl = document.querySelectorAll(".parallax");

    parallaxEl.forEach((el) => {
      const speedx = el.dataset.speedx;
      const speedy = el.dataset.speedy;
      const speedz = el.dataset.speedz;
      const rotateSpeed = el.dataset.rotate;

      const isInLeft =
        parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

      const zValue =
        (cursorPosition - parseFloat(getComputedStyle(el).left)) *
        isInLeft *
        0.1;

      el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed}deg)`;
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setXValue(e.clientX - window.innerWidth / 2);
      setYValue(e.clientY - window.innerHeight / 2);

      setRotateDegree((xValue / (window.innerWidth / 2)) * 20);
      update(e.clientX);
    };

    update(0);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, [xValue]);

  return (
    <main>
      <div className="vignette"></div>
      <img src={bgmg} data-speedx="0.3" data-speedy="0.38" data-speedz="0" data-rotate="0" className="parallax bg-img" alt="img" />
      <img src={fg7} data-speedx="0.27" data-speedy="0.32" data-speedz="0" data-rotate="0" className="parallax fog-7" alt="img"/>
      <img src={m10} data-speedx="0.195" data-speedy="0.305" data-speedz="0" data-rotate="0" className="parallax mountain-10" alt="img"/>
      <img src={fg6} data-speedx="0.25" data-speedy="0.28" data-speedz="0" data-rotate="0" className="parallax fog-6" alt="img"/>
      <img src={m9} data-speedx="0.125" data-speedy="0.155" data-speedz="0.15" data-rotate="0.02" className="parallax mountain-9" alt="img"/>
      <img src={m8} data-speedx="0.1" data-speedy="0.11" data-speedz="0" data-rotate="0.02" className="parallax mountain-8" alt="img"/>
      <img src={fg5} data-speedx="0.16" data-speedy="0.105" data-speedz="0" data-rotate="0" className="parallax fog-5" alt="img"/>
      <img src={m7} data-speedx="0.1" data-speedy="0.1" data-speedz="0" data-rotate="0.09" className="parallax mountain-7" alt="img"/>
      <div className="text parallax" data-speedx="0.07" data-speedy="0.07" data-rotate="0.11" data-speedz="0">
        <h2>India</h2>
        <h1>Matheran</h1>
        <Link to="/plans" className="btn btn--white btn--animated butt">Discover our tours</Link>
        
    </div>
        <img src={m6} data-speedx="0.065" data-speedy="0.05" data-speedz="0.05" data-rotate="0.12" className="parallax mountain-6" alt="img"/>
        <img src={fg4} data-speedx="0.135" data-speedy="0.05" data-speedz="0" data-rotate="0" className="parallax fog-4" alt="img"/>
        <img src={m5} data-speedx="0.08" data-speedy="0.035" data-speedz="0.13" data-rotate="0.1" className="parallax mountain-5" alt="img"/>
        <img src={fg3} data-speedx="0.11" data-speedy="0.018" data-speedz="0" data-rotate="0" className="parallax fog-3" alt="img"/>
        <img src={m4} data-speedx="0.059" data-speedy="0.024" data-speedz="0.35" data-rotate="0.14" className="parallax mountain-4" alt="img"/>
        <img src={m3} data-speedx="0.04" data-speedy="0.018" data-speedz="0.32" data-rotate="0.05" className="parallax mountain-3" alt="img"/>
        <img src={fg2} data-speedx="0.15" data-speedy="0.0115" data-speedz="0" data-rotate="0" className="parallax fog-2" alt="img"/>
        <img src={m2} data-speedx="0.0235" data-speedy="0.013" data-speedz="0.42" data-rotate="0.15" className="parallax mountain-2" alt="img"/>
        <img src={m1} data-speedx="0.027" data-speedy="0.018" data-speedz="0.53" data-rotate="0.2" className="parallax mountain-1" alt="img"/>
        <img src={sr} className="sun-rays" alt="img"/>
        <img src={blackShadow} className="black-shadow" alt="img"/>
        <img src={fg1} data-speedx="0.12" data-speedy="0.01" data-speedz="0" data-rotate="0.1" className="parallax fog-1" alt="img"/>
    </main>
  )
}

