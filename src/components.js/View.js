import axios from "axios";
import React, { useEffect, useState } from "react";
import { Await, useNavigate, useParams } from "react-router-dom";
import instance from "../requestApi/baseUrl";
import "./view.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function View() {
    const base_url = "https://image.tmdb.org/t/p/original/";
const goBack=useNavigate()
  const { id, link } = useParams();
  console.log(id);
  const url = decodeURIComponent(link);
  // console.log(url);

  const [singleMovie, setSingleMovie] = useState([]);
  const fetchSingle = async () => {
    const singleUrl = (await instance.get(url)).data.results;
    singleUrl ? setSingleMovie(singleUrl) : <h1>data not found</h1>;
  };

  useEffect(() => {
    fetchSingle();
  }, []);
  console.log(singleMovie);
  const finalData = singleMovie.find((i) => i.id == id);
  console.log(finalData);

  const back=()=>{
goBack("/")
  }
  return (
    <>
      {finalData ? (
        <div className="singleMain">
          <div class="card">
            <div class="card-thumbnail">
              <img src={`${base_url}${finalData.poster_path}`} alt="" />
            </div>
            <div class="card-body">
              <span class="card-title">
                {finalData.title ? finalData.title : finalData.name}
              </span>
              <p className="reDate">
                Release Date : {finalData.release_date}
                <i class="fa-solid fa-calendar-days date"></i>
              </p>
              <span class="stars">
                popularity : {finalData.popularity}
                <i class="fa-solid fa-fire"></i>{" "}
              </span>
              <p>
                Rating : {finalData.vote_average}
                <i class="fa-solid fa-star"></i>
              </p>
              <p class="card-description">
                {finalData.overview.length > 350
                  ? finalData.overview.slice(0, 350) + "..."
                  : finalData.overview}
              </p>
              {/* <a href="#">Read more</a> */}
            </div>
          </div>
          <button onClick={back} className="back">Back</button>
        </div>
      ) : (
        <h2>data not found</h2>
      )}
    </>
  );
}

export default View;
