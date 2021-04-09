import React from "react";
import { createUseStyles } from "react-jss";
import { projectsStyles } from "./styles";
import { projects } from "./projects";
import { Row, Col } from "react-bootstrap";
import { FaReact } from "react-icons/fa";
import { Icon, InlineIcon } from "@iconify/react";
import typescriptIcon from "@iconify-icons/logos/typescript-icon";
import socketIo from "@iconify-icons/cib/socket-io";
import fileTypeMongo from "@iconify-icons/vscode-icons/file-type-mongo";
import reduxIcon from "@iconify-icons/logos/redux";

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
            <a href={project.url} target="_blank" rel="noreferrer">
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
                    <div className={classes.iconsContainer}>
                      <Row>
                        {project.techs.map((tech) => {
                          if (tech === "react") {
                            return (
                              <Col xs={6}>
                                <FaReact />
                              </Col>
                            );
                          } else if (tech === "typescript") {
                            return (
                              <Col xs={6}>
                                <Icon icon={typescriptIcon} />
                              </Col>
                            );
                          } else if (tech === "socketIo") {
                            return (
                              <Col xs={6}>
                                <Icon icon={socketIo} />
                              </Col>
                            );
                          } else if (tech === "mongo") {
                            return (
                              <Col xs={6}>
                                <Icon icon={fileTypeMongo} />
                              </Col>
                            );
                          } else if (tech === "redux") {
                            return (
                              <Col xs={6}>
                                <Icon icon={reduxIcon} />
                              </Col>
                            );
                          }
                        })}
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
}
