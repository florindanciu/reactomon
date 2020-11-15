import React, { useState, useEffect } from "react";
import axios from "axios";

function Types() {
  const [loadedTypes, setLoadedTypes] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/type`;
    setIsloading(true);
    axios.get(url).then((res) => {
      setIsloading(false);
      setLoadedTypes(res.data.results);
    });
  }, []);

  const textToDisplay = isLoading
    ? "loading types..."
    : loadedTypes.map((type) => (
        <div className="type-card" key={type.name}>
          <div>{type.name}</div>
        </div>
      ));

  return <div className="cards">{textToDisplay}</div>;
}

export default Types;
