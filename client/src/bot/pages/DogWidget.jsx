import React, { useEffect, useState } from "react";

const DogWidget = () => {
  
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setImgUrl(data.message));
  }, []);

  return <div>
    <img src={imgUrl} alt="dogimage" />
  </div>;
};

export default DogWidget;
