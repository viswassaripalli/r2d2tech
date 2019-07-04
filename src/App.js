import React, { useState } from "react";
import "./App.css";
import $ from "jquery";
import MovieCard from "./MovieCard.js";
function App() {
  const [allmovie, setstate] = useState([]);

  const [card, setCard] = useState();
  const search = search => {
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=c445fe1b184998da434a74f867259d8e&language=en-US&query=" +
      search +
      "&page=1&include_adult=false";

    $.ajax({
      url: urlString,
      success: searchResults => {
        // console.log("success");
        const results = searchResults.results;
        console.log(results);
        var movieRows = [];
        results.forEach(movie => {
          // console.log(movie);
          movieRows.push(movie);
        });
        setstate(movieRows);
      },
      error: (xhr, status, err) => console.error("failed to fetch")
    });
  };

  const searchchangeHandler = event => {
    // console.log(event.target.value);

    search(event.target.value);
  };
  const movie = event => {
    const b = event.target.value;
    // console.log(b);
    allmovie.forEach(movie => {
      movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
      movie.backdrop = "https://image.tmdb.org/t/p/w185" + movie.backdrop_path;
      if (movie.id == b) {
        const moviecard = <MovieCard movie={movie} />;
        setCard(moviecard);
      }
    });
  };

  return (
    <div className="App">
      {/* <table className="titlebar">
        <tbody>
          <tr>
            <td>
              <img alt="app-logo" width="50" src="logo.png" />
            </td>
            <td width="8" />
            <td>MovieDB </td>
          </tr>
        </tbody>
      </table> */}
      <nav>
        <img alt="app-logo" width="50" src="logo.png" />{" "}
        <h1 id="title"> MovieDB</h1>
      </nav>
      <input
        list="name"
        placeholder="search"
        style={{
          fontSize: 24,
          display: "block",
          width: "100%",
          paddingTop: 10,
          paddingBottom: 8,
          paddingLeft: 16
        }}
        onChange={searchchangeHandler}
        on
      />
      {allmovie.map(index => (
        <button key={index.id} value={index.id} onClick={movie}>
          {index.title}
        </button>
      ))}
      {card}
    </div>
  );
}

export default App;
