import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createUseStyles } from "react-jss";
import { aboutStyles } from "./styles";
import { Row, Col } from "react-bootstrap";
import { TextPlugin } from "gsap/TextPlugin";

function About() {
  const [topPositions, setTopPositions] = useState([33, 75, 75, 33, -7, -12]);
  const [leftPositions, setLeftPositions] = useState([-11, 14, 59, 85, 62, 12]);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);
  ScrollTrigger.defaults({
    start: "top center",
    end: "top bottom",
    toggleActions: "restart pause resume pause",
    scrub: 1,
    // markers: true,
  });

  const useStyles = createUseStyles(aboutStyles);
  const classes = useStyles();

  useEffect(() => {
    const sectionRight = gsap.utils.toArray(`.${classes.right}`);
    const sectionLeft = gsap.utils.toArray(`.${classes.left}`);

    const aboutTl = gsap.timeline({ repeat: -1 });

    let imageOpacity = 1;
    let positionX = 50;
    if (window.innerWidth < 768) {
      imageOpacity = 0.5;
      positionX = 100;
    }

    aboutTl.to(`.${classes.leftAboutContent} >img`, {
      delay: 1,
      autoAlpha: imageOpacity,
      duration: 5,
      stagger: {
        each: 5,
        onComplete: function () {
          //fade out each target when it completes
          gsap.to(`.${classes.leftAboutContent} >img`, { opacity: 0 });
        },
      },
    });

    sectionRight.forEach((element, index) => {
      gsap.to(`#right${index}`, {
        scrollTrigger: {
          trigger: `#right${index}`,
          onToggle: ({ isActive }) =>
            isActive ? aboutTl.play() : aboutTl.pause(),
        },
        x: `-${positionX}vw`,
        duration: 1,
      });
    });

    sectionLeft.forEach((element, index) => {
      gsap.to(`#left${index}`, {
        scrollTrigger: {
          trigger: `#left${index}`,
        },
        x: `${positionX}vw`,
        duration: 1,
      });
    });
  });

  useEffect(() => {
    setInterval(() => rotateLogos(topPositions, leftPositions), 3000);
  }, [topPositions, leftPositions]);

  const rotateLogos = (topArray: number[], leftArray: number[]) => {
    leftArray.forEach((element, index) => {
      let temp = 0;
      if (index + 1 >= leftArray.length) {
        temp = 0;
      } else {
        temp = index + 1;
      }
      gsap.to(`#logo${index}`, {
        duration: 3,
        ease: "Linear.easeNone",
        left: `${leftArray[temp]}%`,
        top: `${topArray[temp]}%`,
        // repeat: -1,
      });
    });
    const topLast = topArray.pop();
    const leftLast = leftArray.pop();
    if (topLast !== undefined && leftLast !== undefined) {
      topArray.unshift(topLast);
      leftArray.unshift(leftLast);
      setTopPositions(topArray);
      setLeftPositions(leftArray);
    }
  };

  return (
    <div className={classes.aboutContainer}>
      <Row className={classes.aboutRow}>
        <Col xs={12} md={6} className={classes.left} id="left0">
          <div className={classes.leftAboutContent}>
            <img
              alt="malaysiaFlag"
              id="malaysiaFlag"
              src="https://res.cloudinary.com/waliwalo/image/upload/v1617633426/portfolio/Flag_of_Malaysia_iknxgi.png"
            />
            <img
              alt="irelandFlag"
              id="irelandFlag"
              src="https://res.cloudinary.com/waliwalo/image/upload/v1617634511/portfolio/irelandFlag_p0si4v.png"
            />
            <img
              alt="cocktail"
              id="cocktail"
              className={classes.gif}
              src="https://res.cloudinary.com/waliwalo/image/upload/v1617637455/portfolio/oie_5174154Q1GwDu7h_eu6fy2.gif"
            />
            <img
              alt="catCoding"
              id="catCoding"
              className={classes.gif}
              src="https://res.cloudinary.com/waliwalo/image/upload/v1617637643/portfolio/catCoding_ggeikd.gif"
            />
          </div>
        </Col>
        <Col xs={12} md={6} className={classes.right} id="right0">
          <div className={classes.contentsText}>
            I started my coding journey when I was 18, and acquired my diploma
            in computer science in <span>Malaysia</span> then continued my
            Bachelor degree in computer science in <span>Dublin</span>. I
            decided to leave Malaysia to study because I wanted to see the world
            and have always wanted to live in another country to experience a
            different culture. <hr />
            When I'm not coding, I like to make <span>cocktails</span>. I was a
            cocktail bartender for a year while studying in Ireland and I dare
            say there's no better place to be a bartender as the saying goes:
            "God invented whisky to keep the Irish from ruling the world."
            <hr />
            Solving puzzles bring me joys, and that is why I have always loved
            <span> coding</span> and the challenges it brings. A good challenge
            makes me excited, and in the technology field, there is always
            something new to learn and challenge myself.
          </div>
        </Col>
      </Row>
      <Row className={classes.striveRow}>
        <Col md={12} className={classes.left} id="left1">
          <div className={classes.contentsText}>
            My most recent journey is the <span>Strive</span> 6 months Bootcamp.
            It has been a most productive journey, learning new things every day
            from 8 am to 5 pm, Monday to Friday. Sound just like work, except I
            had <span>fun</span> most days which is more than what I could ask
            for.
            <hr />
            During this journey, I learnt how to build a website using{" "}
            <span>MERN</span>
            stack. Not only that, but I have also learned technologies to
            incorporate with MERN such as <span>Socket IO</span>,{" "}
            <span>Redux</span>,<span> Typescript</span>, <span>GSAP</span>,{" "}
            <span>Bootstrap</span>, and deploying using <span>Heroku</span>.{" "}
            <hr />
            The most important lesson of all is the way of life Strive has
            instilled into me, which is to <span>Strive for more</span>.
          </div>
        </Col>
        <Col
          md={12}
          className={classes.right}
          id="right1"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className={classes.rightStriveContent}>
            <img
              alt="mongoLogo"
              id="logo0"
              className={classes.mongoLogo}
              src="https://res.cloudinary.com/waliwalo/image/upload/v1617711149/portfolio/mongodb_apsqb7.png"
            />
            <img
              alt="expressLogo"
              id="logo1"
              className={classes.expressLogo}
              src="https://res.cloudinary.com/waliwalo/image/upload/v1617711368/portfolio/expressjs-removebg-preview_qqa45y.png"
            />
            <img
              alt="reactLogo"
              id="logo2"
              className={classes.reactLogo}
              src="https://res.cloudinary.com/waliwalo/image/upload/v1617711044/portfolio/react-removebg-preview_1_d2wuyc.png"
            />
            <img
              alt="nodeLogo"
              id="logo3"
              className={classes.nodeLogo}
              src="https://res.cloudinary.com/waliwalo/image/upload/v1617711153/portfolio/nodeJs_tgl1sx.png"
            />
            <img
              alt="typescriptLogo"
              id="logo4"
              className={classes.typescriptLogo}
              src="https://res.cloudinary.com/waliwalo/image/upload/v1617711874/portfolio/ts_db0zho.png"
            />
            <img
              alt="reduxLogo"
              id="logo5"
              className={classes.reduxLogo}
              src="https://res.cloudinary.com/waliwalo/image/upload/v1617712054/portfolio/redux-removebg-preview_jepndp.png"
            />
          </div>
        </Col>
      </Row>
      {/* <Row>
        <Col md={12} className={classes.left} id="left2"></Col>
        <Col md={12} className={classes.right} id="right2"></Col>
      </Row> */}
    </div>
  );
}

export default About;
