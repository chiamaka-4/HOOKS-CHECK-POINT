import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "10px",
        padding: "10px",
        fontSize: "medium",
      }}
    >
      {movies.map((eachMovie, index) => {
        return (
          <MovieCard
            key={index}
            title={eachMovie.title}
            description={eachMovie.description}
            posterURL={eachMovie.posterURL}
            link={eachMovie.link}
            link1={eachMovie.link1}
            description1={eachMovie.description1}
            description2={eachMovie.description2}
            rating={eachMovie.rating}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
