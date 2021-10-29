import React from "react";
import Typography from "@material-ui/core/Typography";

export const Home = () => {
  return (
    <div style={{ padding: 24, textAlign: "left" }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
        Welcome to the {process?.env?.REACT_APP_COMPANY || ''}: Front End Test Suite
      </Typography>
      <Typography variant="body1" gutterBottom>
        There are a number of tasks for you to try and solve, each one presents
        itself as a bug that needs fixing.
      </Typography>
      <Typography variant="body1" gutterBottom>
        We wanted to give you a chance to show off your skills but in a way that
        would reflect working with an existing (imperfect) code base.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Feel free to alter this playground as much as you want, add libraries or
        take them away.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please feel free to refactor any (and all) of the code in this project,
        in fact we encourage it.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Spend as much or as little time as you deem fit playing, solving and
        improving this playground.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Questions can be reached via the burger icon in the top left, and we've
        provided a simple error boundary to display what is happening on the
        right hand side of each page.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Currently there are no tests written for the questions, please feel free
        to add some if you have time. Tests can be run via{" "}
        <span style={{ fontWeight: "bold" }}>yarn test</span>
      </Typography>
    </div>
  );
};
