import { Styles } from "jss";

export const headerStyles: Styles<any, any, any> = {
  "@import":
    "url('https://fonts.googleapis.com/css2?family=Train+One&display=swap')",
  headerContainer: {
    padding: "30px 30px",
    textAlign: "left",
    height: "20vh",
    position: "relative",
    "&> .row:first-child": { display: "flex", justifyContent: "space-between" },
  },
  logoContainer: {
    height: "10em",
    width: "10em",
    position: "absolute",
    top: "15vh",
    visibility: "hidden",
    borderRadius: "100%",
    zIndex: 1,
    "& img": { width: "100%", background: "#52FBDE", borderRadius: "100%" },
  },
  line: {
    height: "4vw",
    width: "0",
    position: "absolute",
    left: "-20vw",
    top: "50%",
    zIndex: -1,
  },
  navContainer: {
    width: "50%",
    display: "flex",
    fontSize: "3vw",
    fontFamily: "'Nunito', sans-serif",
    justifyContent: " space-between",
    right: "12vw",
    position: "absolute",
    fontWeight: "900",
    color: "#52FBDE",
    textShadow: "2px 2px #ff0000",
    "& div": { visibility: "hidden" },
  },
  headerContent: {
    padding: "30px 30px",
    height: "60vh",
    color: "#EBFDF9",
    fontFamily: "'Train One', cursive",
  },
  fullName: {
    fontSize: "8vw",
  },
  position: {
    fontSize: "6vw",
    visibility: "hidden",
  },
  "@media screen and (max-width: 500px)": {
    logoContainer: {
      height: "5em",
      width: "5em",
    },
    navContainer: {
      fontSize: "4vw",
    },
    line: {
      height: "6vw",
    },
    fullName: {
      fontSize: "10vw",
    },
    position: {
      fontSize: "8vw",
    },
  },
};
