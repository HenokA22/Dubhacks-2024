import React, { useEffect, useState } from 'react';

function getSong() {
  const accessToken = "" // get access token later
  const [songData, setSongData] = useState(null);

  useEffect(() => {
    fetch(
      // query
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      }
    )
    .then((response) => response.json())
    .then((data) => setSongData({/** parse returned data */}))
  }, []);

  // send stuff to cloud data
}