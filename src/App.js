import React, { useEffect, useState } from "react";
import "./styles.css";
import Card from "./Card/card";

export default function App() {
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(res => res.json())
      .then(setItems)
      .catch(err => {
        console.log(123123);
      });
  }, []);
  // console.log(items.results[9]);

  return (
    <div>
      <h1 className="App" style={{ margin: "30px" }}>
        List Of Charectors{" "}
      </h1>
      <div className="body">
        {items.results &&
          items.results.map(item => {
            return (
              <span class="b">
                <Card
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  status={item.status}
                  species={item.species}
                  lstLoc={item.location.name}
                />
              </span>
            );
          })}
      </div>
    </div>
  );
}
