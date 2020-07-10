import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "./card.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(70),
      height: theme.spacing(30)
    }
  }
}));

export default function SimplePaper(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={7} className="paper">
        <div className="image">
          <img src={props.image} width="250" height="240" alt="error" />
        </div>
        <div className="data">
          <div>
            <h2>{props.name}</h2>
          </div>
          <div>
            {props.status}-{props.species}
          </div>
          <div style={{ color: "grey", marginTop: "10px" }}>
            Last Known Location :
          </div>
          <div>{props.lstLoc}</div>
          <div style={{ color: "grey", marginTop: "10px" }}>First Seen in:</div>
          <div>Interdimensional Cable</div>
        </div>
      </Paper>
    </div>
  );
}
