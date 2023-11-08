import React from 'react'
import Row from '../components.js/Row'
import Banner from '../components.js/Banner'
import requests from '../requestApi/allRequest'
import View from '../components.js/View'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div>
        <Banner fetchUrl={requests.fetchTopRated}></Banner>
          <Row
            change={true}
            title={"Trending Now"}
            fetchUrl={requests.fetchTrending}
          ></Row>

          <Row
            title={"Netflix originals"}
            fetchUrl={requests.fetchNetflixOriginals}
          ></Row>
          <Row title={"Top rated"} fetchUrl={requests.fetchTopRated}></Row>

          <Row
            title={"Action movies"}
            fetchUrl={requests.fetchActionMovies}
          ></Row>
          <Row
            title={"Comedy movies"}
            fetchUrl={requests.fetchComedyMovies}
          ></Row>
          <Row
            title={"Horror movies"}
            fetchUrl={requests.fetchHorrorMovies}
          ></Row>
          <Row
            title={"Romance movies"}
            fetchUrl={requests.fetchRomanceMovies}
          ></Row>
          <Row
            title={"Documentaries"}
            fetchUrl={requests.fetchDocumentaries}
          ></Row>
      </div>
    </>
  );
}

export default Home