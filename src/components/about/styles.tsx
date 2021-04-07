import { Styles } from "jss";

export const aboutStyles: Styles<any, any, any> = {
  aboutContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: "50px",
  },
  left: {
    position: "absolute",
    left: "-50vw",
    backgroundColor: "none",
    width: "50%",
    height: "60%",
  },
  right: {
    position: "absolute",
    backgroundColor: "none",
    right: "-50vw",
    width: "50%",
    height: "60%",
  },
  leftAboutContent: {
    height: "100%",
    position: "relative",
    "& >img": {
      position: "absolute",
      padding: "3em 0",
      maxHeight: "100%",
      maxWidth: "100%",
      visibility: "hidden",
    },
  },
  gif: {
    left: "20%",
  },
  contentsText: {
    padding: "0 1em",
    fontFamily: "'Dela Gothic One', cursive",
    fontSize: "1.6vw",
    textAlign: "justify",
    color: "white",
    "& span": {
      fontSize: "1.5em",
      color: "white",
    },
  },
  striveRow: { marginTop: "10em" },
  leftStriveContent: {},
  rightStriveContent: {
    height: "30rem",
    width: "30rem",
    backgroundColor: "none",
    borderRadius: "100%",
    position: "relative",
    "& img": {
      opacity: 1,
      zIndex: -1,
      position: "absolute",
      filter: "drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 1))",
    },
  },
  mongoLogo: { left: "33%", top: "-11%", width: "10em", height: "8em" },
  expressLogo: { left: "75%", top: "14%", width: "10em", height: "8em" },
  reactLogo: { left: "75%", top: "59%", width: "12em", height: "9em" },
  nodeLogo: { left: "33%", top: "85%", width: "8em", height: "7em" },
  typescriptLogo: { left: "-7%", top: "62%", width: "6em", heigth: "4em" },
  reduxLogo: { left: "-12%", top: "12%", width: "10em", height: "9em" },
  "@media screen and (max-width: 768px)": {
    headerContainer: {
      padding: "17px 30px",
    },
    headerContent: { padding: "0px 30px", height: "40vh" },
    left: {
      width: "100%",
      left: "-100vw",
    },
    right: {
      width: "100%",
      right: "-100vw",
    },
    gif: {
      left: 0,
    },
    contentsText: {
      fontSize: "1em",
      textShadow: "1px 0px #00FFED",
    },
    rightStriveContent: {
      "& img": { opacity: 0.5, zIndex: -1 },
    },
  },
};
