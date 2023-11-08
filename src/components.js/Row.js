import React, { useEffect, useState } from "react";
import instance from "../requestApi/baseUrl";
import './row.css'
import { Link } from "react-router-dom";
import View from "./View";


function Row({ title, fetchUrl,change }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const result = await instance.get(fetchUrl);
    setMovies(result.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, [fetchUrl]);

console.log(movies);
  return (
    <>
      <div className="row">
        <h1>
          {title}
          <hr
            style={{
              border: "none",
              height: "1px",
              backgroundColor: "white",
              margin: "2px 0 10px 0",
            }}
          />
        </h1>
        <div className="movie">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <>
                <Link
                  to={`/view/${movie.id}/${encodeURIComponent(fetchUrl)}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div className="hoverCard">
                    <img
                      className="movieImg"
                      src={`${base_url}${
                        change ? movie.backdrop_path : movie.poster_path
                      }`}
                      alt=""
                    />
                    {movie.title ? <p>{movie.title}</p> : <p>{movie.name}</p>}
                  </div>
                  <div className="hoverCard2"></div>
                </Link>
              </>
            ))
          ) : (
            <div style={{ marginTop: "1rem" }}>
              <i
                style={{ color: "white" }}
                class="fa-solid fa-3x fa-spinner fa-spin"
              ></i>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Row;
