import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createUseStyles } from "react-jss";
import { aboutStyles } from "./styles";
import { Row, Col } from "react-bootstrap";
import { TextPlugin } from "gsap/TextPlugin";

function About() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);
  ScrollTrigger.defaults({
    start: "top center",
    end: "top 100px",
    toggleActions: "restart pause resume pause",
    scrub: 1,
    markers: true,
  });

  const useStyles = createUseStyles(aboutStyles);
  const classes = useStyles();

  useEffect(() => {
    const sectionRight = gsap.utils.toArray(`.${classes.right}`);
    const sectionLeft = gsap.utils.toArray(`.${classes.left}`);

    const tl = gsap.timeline();

    // tl.to(`.${classes.leftContent}`, {
    //   x: 0,
    //   autoAlpha: 1,
    //   duration: 2,
    // });

    sectionRight.forEach((element, index) => {
      gsap.to(`#right${index}`, {
        scrollTrigger: {
          trigger: `#right${index}`,
          onToggle: ({ isActive }) => (isActive ? tl.play() : tl.pause()),
        },
        x: "-50vw",
        duration: 1,
      });
    });

    sectionLeft.forEach((element, index) => {
      gsap.to(`#left${index}`, {
        scrollTrigger: {
          trigger: `#left${index}`,
        },
        x: "50vw",
        duration: 1,
      });
    });
  });

  return (
    <div className={classes.aboutContainer}>
      <Row>
        <Col md={12} className={classes.left} id="left0">
          <div className={classes.leftContent}>
            <img
              alt="malaysiaFlag"
              src="https://res.cloudinary.com/waliwalo/image/upload/v1617633426/portfolio/Flag_of_Malaysia_iknxgi.png"
            />
            <img
              alt="irelandFlag"
              src="https://res.cloudinary.com/waliwalo/image/upload/v1617634511/portfolio/irelandFlag_p0si4v.png"
            />
            <img
              alt="cocktail"
              className={classes.cocktailGif}
              src="https://res.cloudinary.com/waliwalo/image/upload/v1617637455/portfolio/oie_5174154Q1GwDu7h_eu6fy2.gif"
            />
            <img
              alt="catCoding"
              className={classes.cocktailGif}
              src="https://res.cloudinary.com/waliwalo/image/upload/v1617637643/portfolio/catCoding_ggeikd.gif"
            />
          </div>
        </Col>
        <Col md={12} className={classes.right} id="right0"></Col>
      </Row>
      <Row>
        <Col md={12} className={classes.left} id="left1"></Col>
        <Col md={12} className={classes.right} id="right1"></Col>
      </Row>
      <Row>
        <Col md={12} className={classes.left} id="left2"></Col>
        <Col md={12} className={classes.right} id="right2"></Col>
      </Row>
      <Row>
        <Col md={12} className={classes.left} id="left3"></Col>
        <Col md={12} className={classes.right} id="right3"></Col>
      </Row>
    </div>
  );
}

export default About;
