import { Styles } from "jss";

export const aboutStyles: Styles<any, any, any> = {
  aboutContainer: {
    height: "200vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: "20px",
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
    backgroundColor: "black",
    right: "-50vw",
    width: "50%",
    height: "60%",
  },
  leftContent: {
    height: "100%",
    "& >img": {
      position: "absolute",
      padding: "3em 0",
      maxHeight: "100%",
      maxWidth: "100%",
    },
  },
  cocktailGif: {
    left: "20%",
  },
};
