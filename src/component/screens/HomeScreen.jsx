import React, { useState, useEffect } from "react";
import AddMovie from "../AddMovie";
import Filter from "../Filter";
import MovieList from "../MovieList";

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [filters, setFilters] = useState({ title: "", rating: "" });

  useEffect(() => {
    // You can fetch movies from an API or any other data source
    // For the sake of example, let's assume you have a static list of movies
    const staticMovies = [
      {
        title: "A tribe called judah",
        description:
          "A Tribe Called Judah tells the story of a single mother, Jedidah Judah (played by Funke Akindele), who has five sons from five different fathers from five different tribes. The first two sons are responsible and try their best to work and support their mother.",

        posterURL: "tribe of judah.jpeg",
        rating: 4.5,
        link: "/description/tribeofjudah",
      },

      {
        title: "Aparajita",
        description:
          "Deserted by her man and left alone to fend for her daughters, Aparajita rises to meet every challenge so that her family can stand tall",

        posterURL: "aparajita.jpeg",
        rating: 5,
        link: "/description/aparajita",
      },
      {
        title: "This is fate",
        description:
          "The TV Series This is fate is a spin-off of the popular and much-loved Twist of fate. It centers around Pragya and Bulbul estranged sisters (Preeta and Shruti) who had been living with their father Raghuveer.",

        posterURL: "this is fate.jpeg",
        rating: 4.5,
        link: "/description/thisisfate",
      },
    ];

    setMovies(staticMovies);
    setFilteredMovies(staticMovies);
  }, []);

  const handleFilterChange = (filterType, value) => {
    if (filterType === "rating")
      setFilters({ ...filters, [filterType]: value });
    if (filterType === "title") setFilters({ ...filters, [filterType]: value });

    const filteredMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        movie.rating.toString().includes(filters.rating)
    );

    setFilteredMovies(filteredMovies);
  };

  const addMovieHandler = (newMovieData) => {
    setFilteredMovies([...filteredMovies, newMovieData]);
  };

  // Apply filters to the movies
  return (
    <div>
      <AddMovie addMovie={addMovieHandler} />
      <Filter filter={handleFilterChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default HomeScreen;
