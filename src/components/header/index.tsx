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
      // border: "2px solid blue",
      onComplete: () => {
        gsap.to(`.${classes.line}`, {
          duration: 3,
          width: "120vw",
        });
        gsap.to(`.${classes.navContainer} div`, {
          duration: 2,
          autoAlpha: 1,
          stagger: 1,
        });
      },
    });
    let namePosition: string = "25vh";
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
      <div className={classes.headerContainer}>
        <Row>
          <Col>
            <div className={classes.logoContainer}>
              <img
                src="https://res.cloudinary.com/waliwalo/image/upload/v1617350354/portfolio/AvatarMaker_2_vnmoix.png"
                alt="logo"
              />
              <div className={classes.line}>
                <div className={classes.navContainer}>
                  <div>About Me</div>
                  <div>Projects</div>
                  <div>Contact</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
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
