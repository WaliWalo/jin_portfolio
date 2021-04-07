import { Styles } from "jss";

export const headerStyles: Styles<any, any, any> = {
  "@import":
    "url('https://fonts.googleapis.com/css2?family=Train+One&display=swap')",
  headerContainer: {
    padding: "30px 10vw",
    textAlign: "left",
    display: "flex",
    justifyContent: "center",
  },
  logoContainer: {
    height: "15em",
    width: "15em",
    visibility: "hidden",
    borderRadius: "100%",
    zIndex: 1,
    "& img": { width: "100%", background: "#52FBDE", borderRadius: "100%" },
  },
  headerContent: {
    padding: "0 10vw 5em 10vw",
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
    fullName: {
      fontSize: "10vw",
    },
    position: {
      fontSize: "8vw",
    },
  },
};
