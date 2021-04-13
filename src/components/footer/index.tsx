import React from "react";
import { Col, OverlayTrigger, Row } from "react-bootstrap";
import { Popover } from "react-bootstrap";
import { EnvelopeFill, Github, Linkedin } from "react-bootstrap-icons";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { createUseStyles } from "react-jss";
import { footerStyles } from "./styles";

function Footer() {
  const useStyles = createUseStyles(footerStyles);
  const classes = useStyles();

  return (
    <>
      <hr style={{ marginTop: "5em" }} />
      <div className={`${classes.footerContainer} pb-3`}>
        <Row className={classes.footerRow}>
          <Col md={3} xs={6}>
            <OverlayTrigger
              trigger="click"
              key="top"
              placement="top"
              overlay={
                <Popover id={`popover-positioned-$"top"`}>
                  <Popover.Title as="h3">Email</Popover.Title>
                  <Popover.Content>
                    <strong>hungjinchong@outlook.com</strong>
                  </Popover.Content>
                </Popover>
              }
            >
              <EnvelopeFill size={50} className={classes.emailIcon} />
            </OverlayTrigger>
          </Col>
          <Col md={3} xs={6}>
            <a
              href="https://www.linkedin.com/in/hungjinchong/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={50} />
            </a>
          </Col>
          <Col md={3} xs={6}>
            <a
              href="https://github.com/WaliWalo"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={50} />
            </a>
          </Col>
          <Col md={3} xs={6}>
            <a
              href={process.env.PUBLIC_URL + "/HUNG_JIN_CHONG.pdf"}
              // target="_blank"
              // rel="noreferrer"
              download="download"
            >
              <FaEnvelopeOpenText size={50} />
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Footer;
