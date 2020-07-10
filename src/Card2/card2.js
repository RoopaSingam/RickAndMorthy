import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "./card2.css";
import styled from "@emotion/styled";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(55),
      height: theme.spacing(55)
    }
  }
}));
const Carousel = styled("div")`
  display: flex;
  overflow-x: scroll;
`;

export default function SimplePaper(props) {
  const classes = useStyles();
  const ref = React.useRef();

  return (
    <div className={classes.root}>
      <Paper elevation={7} className="paper1">
        <div className="data1">
          <div>
            <h2>{props.name}</h2>
          </div>
          <div style={{ marginTop: "20px" }}>Air_Date :</div>
          <div style={{ color: "grey" }}>{props.air_date}</div>

          <div style={{ marginTop: "10px" }}>Episode : </div>
          <div>
            <h4>{props.episode}</h4>
          </div>
          <div style={{ marginTop: "10px" }}>Cast : </div>
          <Carousel ref={ref}>
            <div style={{ margin: "10px" }}>
              {" "}
              <img
                src="https://rickandmortyapi.com/api/character/avatar/173.jpeg"
                width="150px"
                height="150px"
                alt="error"
              />
            </div>
            <div style={{ margin: "10px" }}>
              {" "}
              <img
                src="https://rickandmortyapi.com/api/character/avatar/173.jpeg"
                width="150px"
                height="150px"
                alt="error"
              />
            </div>{" "}
            <div style={{ margin: "10px" }}>
              {" "}
              <img
                src="https://rickandmortyapi.com/api/character/avatar/173.jpeg"
                width="150px"
                height="150px"
                alt="error"
              />
            </div>
          </Carousel>
        </div>
      </Paper>
    </div>
  );
}
