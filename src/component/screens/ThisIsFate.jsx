import React from "react";

const ThisIsFate = () => {
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
        src={"https://www.youtube.com/embed/kvbqmpI0CDw"}
        title="Zee World: This Is Fate (SEASON FINALE)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div>
        DESCRIPTION: A simple indian teacher who met with an indian celebrity
        abishek Mera.
      </div>
    </div>
  );
};
export default ThisIsFate;
