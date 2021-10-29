import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

type NavigationDrawerPropsType = {
  toggleDrawer: (open: boolean) => void;
  open: boolean;
};
export const NavigationDrawer = ({
  toggleDrawer,
  open,
}: NavigationDrawerPropsType) => {
  const classes = useStyles();
  const history = useHistory();

  const handleCloseDrawer = () => {
    toggleDrawer(false);
  };

  const handleButtonClick = (url: string) => {
    handleCloseDrawer();
    history.push(url);
  };

  return (
    <div>
      <Drawer open={open} onClose={handleCloseDrawer}>
        <div className={classes.list} role="presentation">
          <List>
            <ListItem button onClick={(e) => handleButtonClick("/")}>
              <ListItemAvatar>
                <Avatar>
                  <HomeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Home" />
            </ListItem>
            <Divider />
            <ListItem button onClick={(e) => handleButtonClick("questionOne")}>
              <ListItemAvatar>
                <Avatar>1</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Question One" secondary="Render bug" />
            </ListItem>
            <ListItem button onClick={(e) => handleButtonClick("questionTwo")}>
              <ListItemAvatar>
                <Avatar>2</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Question Two" secondary="Api Call" />
            </ListItem>
            <ListItem
              button
              onClick={(e) => handleButtonClick("questionThree")}
            >
              <ListItemAvatar>
                <Avatar>3</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Question Three"
                secondary="List on the fritz"
              />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};
