import React from "react";

const TribeOfJudah = () => {
  const videoStlye = {
    width: "100%",
    height: "auto",
    border: "none",
  };
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/pEUZVfeCU94?si=R2IW-GY-mKSJYxE8"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div>DESCRIPTION: A mother of five children from different fathers</div>
    </div>
  );
};

export default TribeOfJudah;
