import React, { useEffect, useState } from "react";
import "./styles.css";
import Card2 from "./Card2/card2";
import { getAllEpisodes } from "./services/episodeServ";

export default function App() {
  const [items, setItems] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const currUrl = "https://rickandmortyapi.com/api/episode";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllEpisodes(currUrl);
      // console.log(response.info.prev);
      setNextUrl(response.info.next);
      setPrevUrl(response.info.prev);
      // console,log(response.info,prev);
      // await loadCast(response.results);
      setItems(response);
    }
    fetchData();
  }, []);
  // console.log(items);
  // console.log(prevUrl);

  const next = async () => {
    let data = await getAllEpisodes(nextUrl);
    // await loadPokemon(data.results);
    // console.log(data);
    setNextUrl(data.info.next);
    setPrevUrl(data.info.prev);
    setItems(data);
  };

  const prev = async () => {
    if (!prevUrl) return;
    let data = await getAllEpisodes(prevUrl);
    // await loadPokemon(data.results);
    console.log(data);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setItems(data);
  };

  return (
    <div>
      <h1 className="App" style={{ margin: "30px" }}>
        List Of Episodes
      </h1>
      <div className="btn">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
      {items.results &&
        items.results.map(item => {
          return (
            <span className="b">
              <Card2
                id={item.id}
                name={item.name}
                air_date={item.air_date}
                episode={item.episode}
              />
            </span>
          );
        })}
    </div>
  );
}
