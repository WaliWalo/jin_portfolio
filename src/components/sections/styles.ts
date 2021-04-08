import { Styles } from "jss";

export const sectionsStyles: Styles<any, any, any> = {
  containerSize: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    visibility: "hidden",
  },
  innerContainer: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "&:before": {
      content: '""',
      position: "absolute",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
      backgroundColor: " rgba(0,0,0,0.25)",
    },
  },
  texts: {
    fontFamily: "'Dela Gothic One', cursive",
    fontSize: "5vw",
    textAlign: "justify",
    textAlignLast: "center",
    padding: "1em 2em",
    color: "black",
    fontWeight: 900,
    textShadow: "0 0 3px #FF0000",
    textStroke: "4px white",
    "& span": {
      fontSize: "1.5em",
      color: "white",
      textStroke: "4px black",
    },
  },
  sectionContainer: {
    height: "100vh",
  },
  countryContainer: {
    extend: "containerSize",
    backgroundColor: "white",
  },
  countryInner: {
    backgroundImage: `url(
      "https://res.cloudinary.com/waliwalo/image/upload/v1617633426/portfolio/Flag_of_Malaysia_iknxgi.png"
    )`,
    extend: "innerContainer",
  },
  countryText: {
    extend: "texts",
    padding: "2em 2em",
  },
  cocktailContainer: {
    extend: "containerSize",
    backgroundColor: "white",
  },
  cocktailInner: {
    backgroundImage: `url(
        "https://res.cloudinary.com/waliwalo/image/upload/v1617634511/portfolio/irelandFlag_p0si4v.png"
      )`,
    backgroundSize: "100% 100%;",
    extend: "innerContainer",
  },
  cocktailText: {
    extend: "texts",
  },
  cocktailImg: {
    backgroundImage: `url(
        "https://res.cloudinary.com/waliwalo/image/upload/v1617695492/portfolio/oie_5174154Q1GwDu7h_eu6fy2.gif"
      )`,
    backgroundSize: "100% 100%;",
    extend: "innerContainer",
    visibility: "hidden",
  },
  codingContainer: {
    extend: "containerSize",
    backgroundColor: "yellow",
  },
  codingInner: {
    backgroundImage: `url(
        "https://res.cloudinary.com/waliwalo/image/upload/v1617695554/portfolio/catCoding_ggeikd.gif"
      )`,
    backgroundSize: "100% 100%;",
    extend: "innerContainer",
  },
  codingText: {
    extend: "texts",
  },
  skillsContainer: {
    extend: "containerSize",
    backgroundColor: "red",
  },
  skillsInner: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "11em",
    extend: "innerContainer",
  },
  skillsText: {
    extend: "texts",
    fontSize: "3vw",
  },
  rightStriveContent: {
    height: "30rem",
    width: "30rem",
    backgroundColor: "none",
    borderRadius: "100%",
    position: "absolute",
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
};
