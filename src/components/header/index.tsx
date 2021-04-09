import { gsap } from "gsap";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { headerStyles } from "./styles";
import { TextPlugin } from "gsap/TextPlugin";

function Header() {
  gsap.registerPlugin(TextPlugin);
  const useStyles = createUseStyles(headerStyles);
  const classes = useStyles();

  useEffect(() => {
    gsap.to(`.${classes.logoContainer}`, {
      duration: 1,
      rotate: 360,
      autoAlpha: 1,
      top: "5vh",
    });
    let namePosition: string = "5vh";
    if (window.innerWidth < 500) {
      namePosition = "10vh";
    }
    gsap.to(`.${classes.fullName}`, {
      duration: 2,
      y: namePosition,
      text: "HUNG JIN CHONG",
      ease: "power2",
    });
    gsap.to(`.${classes.position}`, {
      delay: 2,
      duration: 2,
      y: namePosition,
      text: "Full Stack Developer",
      autoAlpha: 1,
      ease: "power2",
    });
  });

  return (
    <>
      <div id="headerTop" className={classes.headerContainer}>
        <div className={classes.logoContainer}>
          <div>
            <img
              src="https://res.cloudinary.com/waliwalo/image/upload/v1617807197/portfolio/AvatarMaker_2_kp8v5q.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div className={classes.headerContent}>
        <div className={classes.fullName}>
          <span>Hi there!</span>
        </div>
        <div className={classes.position}>
          <span>ndsandaskjl</span>
        </div>
      </div>
    </>
  );
}

export default Header;
