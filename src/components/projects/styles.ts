import { Styles } from "jss";

export const projectsStyles: Styles<any, any, any> = {
  "@import":
    "url('https://fonts.googleapis.com/css2?family=Train+One&display=swap')",
  transform: {
    transform: "rotateY(180deg)",
  },
  positioning: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "100%",
  },
  projectsContainer: {
    padding: "0em 2em",
  },
  projectHeader: {
    textAlign: "center",
    fontFamily: "'Train One', cursive",
    fontSize: "10vh",
    color: "white",
  },
  projectInnerContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  projects: {
    maxWidth: "none",
    display: "flex",
    justifyContent: "center",
    "& a": {
      color: "black",
      "&: hover": { color: "black" },
    },
  },
  flipCard: {
    backgroundColor: "transparent",
    width: "16em",
    height: "16em",
    // border: "1px solid #f1f1f1",
    borderRadius: "100%",
    perspective: "1000px",
    "&:hover $flipCardInner": { extend: "transform" },
  },
  flipCardInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
  },
  flipCardFront: {
    backgroundColor: "white",
    color: "black",
    extend: "positioning",
    "& img": {
      width: "100%",
      height: "100%",
      borderRadius: "100%",
      objectFit: "cover",
    },
  },
  flipCardBack: {
    // backgroundImage:
    //   "radial-gradient(circle, #1500ff, #103cff, #0b77ff, #05b3ff, #00eeff)",
    backgroundColor: "white",
    color: "blck",
    transform: "rotateY(180deg)",
    extend: "positioning",
    fontSize: "3vh",
    paddingTop: "2em",
    fontFamily: "'Londrina Solid', cursive",
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    "& div": {
      padding: 0,
      "& svg": { height: "2em", width: "2em" },
    },
  },
};
