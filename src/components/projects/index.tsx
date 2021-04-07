import React from "react";
import { createUseStyles } from "react-jss";
import { projectsStyles } from "./styles";
import { projects } from "./projects";
import { Row, Col, Container } from "react-bootstrap";
export default function Projects() {
  const useStyles = createUseStyles(projectsStyles);
  const classes = useStyles();

  return (
    <div className={`${classes.projectsContainer}`}>
      <hr />
      <div className={classes.projectHeader}>
        <span>Projects</span>
      </div>
      <Row className={classes.projectInnerContainer}>
        {projects.map((project) => (
          <Col
            xs={12}
            md={6}
            lg={6}
            xl={1}
            className={`${classes.projects} pt-3`}
          >
            <div className={classes.flipCard}>
              <div className={classes.flipCardInner}>
                <div className={classes.flipCardFront}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className={classes.projectImage}
                  />
                </div>
                <div className={classes.flipCardBack}>
                  <p>{project.name}</p>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
