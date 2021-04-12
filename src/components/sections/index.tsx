import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { sectionsStyles } from "./styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

function Sections() {
  const [topPositions, setTopPositions] = useState([33, 75, 75, 33, -7, -12]);
  const [leftPositions, setLeftPositions] = useState([-11, 14, 59, 85, 62, 12]);

  const useStyles = createUseStyles(sectionsStyles);
  const classes = useStyles();
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "none", duration: 2 });

  useEffect(() => {
    const countryTl = gsap.timeline({ paused: true });
    countryTl.to(`.${classes.countryText}`, {
      text: "I'm from Malaysia.",
      duration: 2,
      delay: 0.5,
    });
    countryTl.to(`.${classes.countryText}`, {
      text:
        "I completed my diploma in Software Engineering in Asia Pacific University.",
      duration: 4,
      delay: 0.5,
    });

    const tl = gsap.timeline();
    tl.from(`.${classes.countryContainer}`, {
      xPercent: -100,
      autoAlpha: 0,
    });
    tl.from(`.${classes.cocktailContainer}`, {
      xPercent: 100,
      autoAlpha: 0,
    });
    tl.from(`.${classes.codingContainer}`, {
      yPercent: -100,
      autoAlpha: 0,
    });
    tl.from(`.${classes.skillsContainer}`, { yPercent: 100, autoAlpha: 0 });
    ScrollTrigger.create({
      animation: tl,
      trigger: `.${classes.sectionContainer}`,
      start: "top top",
      end: "+=2000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      markers: true,
      snap: 1 / 4,
      onEnter: () => {
        countryTl.restart();
      },

      onSnapComplete: ({ progress, direction, isActive }) => {
        if (progress === 0.25) {
          return countryTl.restart();
        }
      },
    });
  }, []);

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
    <div className={classes.sectionContainer}>
      <div className={classes.countryContainer}>
        <div className={classes.countryInner}>
          <div className={classes.countryText}>
            Hello! My name is <span>Jin</span>.
          </div>
        </div>
      </div>
      <div className={classes.cocktailContainer}>
        <div className={classes.cocktailInner}>
          <div className={classes.cocktailText}>
            In my free time, I like to make cocktails. I was a cocktail
            bartender for a year while studying in Dublin
          </div>
        </div>
      </div>
      <div className={classes.codingContainer}>
        <div className={classes.codingInner}>
          <div className={classes.codingText}>
            Solving puzzles bring me joys, and that is why I have always loved
            coding and the challenges it brings.
          </div>
        </div>
      </div>
      <div className={classes.skillsContainer}>
        <div className={classes.skillsInner}>
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
          <div className={classes.skillsText}>
            My most recent skill set includes <span>MERN</span> stack,{" "}
            <span>Socket IO， </span>
            <span>Redux</span>,<span> Typescript</span>, <span>GSAP</span>,{" "}
            <span>Bootstrap</span>, and deploying using <span>Heroku</span>.{" "}
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sections;
