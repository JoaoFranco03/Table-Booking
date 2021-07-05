import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  gray: {
    alignItems: "center",
    backgroundColor: "#535353",
    color: "#ffffff",
  },
  lightGray: {
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    color: "#000000",
  },
  lightestGray: {
    alignItems: "center",
    backgroundColor: "#F8F9F9",
    color: "#000000",
  },
  blackOnYellowBtn: {
    alignItems: "center",
    backgroundColor: "#E6B567",
    color: "#000000",
  },
  black: {
    color: "#000000",
  },

  titleBar: {
    height: 65,
    fontSize: 17,
    fontFamily: "Inter",
  },
  titleBar2: {
    height: 130,
  },
  align: {
    alignItems: "center",
  },

  fillWindow: {
    height: "100%",
    position: "absolute",
    left: 0,
    width: "100%",
  },
  pill: {
    borderRadius: 18,
    height: 35,
  },
  spacing: {
    spacing: 5,
  },
  inter: {
    fontFamily: "Inter",
  },
  date: {
    position: "inherit",
  },
  title: {
    position: "inherit",
    top: 66,
  },
  paper: {
    backgroundColor: "blue",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
