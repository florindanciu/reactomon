import React, { useState, useEffect } from "react";
import axios from "axios";

function Details(props) {
  const [loadedDetails, setLoadedDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(props.location.url).then((res) => {
      setIsLoading(false);
      setLoadedDetails(res.data);
    });
  });

  const textToDisplay = isLoading ? (
    "details are loading..."
  ) : (
    <div>
      <div className="details-card" key={loadedDetails.id}>
        <h4>{loadedDetails.name}</h4>
      </div>
      <div className="details-card" key={loadedDetails.id}>
        <ul>
          <li>Base experience: {loadedDetails.base_experience}</li>
          <li>Height: {loadedDetails.height}</li>
          <li>Weight: {loadedDetails.weight}</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div>
      <div>{textToDisplay}</div>
    </div>
  );
}

export default Details;
