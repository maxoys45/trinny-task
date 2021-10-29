import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./styles";
import { NavigationDrawer } from "../NavigationDrawer";

export const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean): void => {
    setOpen(open);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {process?.env?.REACT_APP_COMPANY || ''}
          </Typography>
        </Toolbar>
      </AppBar>
      <NavigationDrawer toggleDrawer={toggleDrawer} open={open} />
    </>
  );
};
