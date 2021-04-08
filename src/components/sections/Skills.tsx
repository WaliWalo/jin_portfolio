import React from "react";
import { createUseStyles } from "react-jss";
import { sectionsStyles } from "./styles";

function Skills() {
  const useStyles = createUseStyles(sectionsStyles);
  const classes = useStyles();
  return (
    <div className={classes.skillsText}>
      My most recent journey is the <span>Strive</span> 6 months Bootcamp. It
      has been a most productive journey, learning new things every day from 8
      am to 5 pm, Monday to Friday. Sound just like work, except I had{" "}
      <span>fun</span> most days which is more than what I could ask for.
      <hr />
      During this journey, I learnt how to build a website using{" "}
      <span>MERN</span>
      stack. Not only that, but I have also learned technologies to incorporate
      with MERN such as <span>Socket IO</span>, <span>Redux</span>,
      <span> Typescript</span>, <span>GSAP</span>, <span>Bootstrap</span>, and
      deploying using <span>Heroku</span>. <hr />
      The most important lesson of all is the way of life Strive has instilled
      into me, which is to <span>Strive for more</span>.{" "}
    </div>
  );
}

export default Skills;
