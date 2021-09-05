import React from "react";
import { Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {ContextProvider} from './Context'

import VideoPlayer from "./EventComponent/VideoPlayer";
import Sidebar from "./EventComponent/SideBar";
import Notifications from "./EventComponent/Notifications";


const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    border: "2px solid black",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    background:
    `linear-gradient(
      rgba(0, 0, 0, 0.3), 
      rgba(0, 0, 0, 0.3)
    ),
    url(https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
}));

const Event = () => {
  const classes = useStyles();

  return (
    <ContextProvider>
      <div className={classes.wrapper}>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography variant="h2" align="center">
            Video Chat
          </Typography>
        </AppBar>
        <VideoPlayer />
        <Sidebar>
          <Notifications />
        </Sidebar>
      </div>
    </ContextProvider>
  );
};

export default Event;
