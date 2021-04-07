import { Styles } from "jss";

export const footerStyles: Styles<any, any, any> = {
  footerContainer: {
    display: "flex",
    justifyContent: "center",
    "& >div": { padding: "0 2em", "& svg": { color: "white" } },
  },
  emailIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
};
