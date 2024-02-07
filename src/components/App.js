import React, { useState, useEffect } from "react";

function App() {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!response.ok) {
          throw new Error("Failed to fetch dog image");
        }
        const data = await response.json();
        setDogImageUrl(data.message);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDogImage();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImageUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
