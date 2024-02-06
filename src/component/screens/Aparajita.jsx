import React from "react";

const Aparajita = () => {
  const videoStlye = {
    width: "100%",
    height: "auto",
    border: "none",
  };
  return (
    <div>
      <iframe
        width="853"
        height="480"
        src={"https://www.youtube.com/embed/1XPzWWNFiIU"}
        title="Zee World: Aparajita | Coming Soon"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div>
        DESCRIPTION: A mother of three daughters who fought hard to make a name
        for herself
      </div>
    </div>
  );
};
export default Aparajita;
