import React, { useEffect, useState } from 'react';
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "../API/requests";
import './App.css';

const App=()=> {

  const [personalizeUrl, setPersonalizeUrl] = useState("https://hustlecoding.link/all");

  useEffect(() => {
      // async function fetchData(){
      //     const request = await axios.get(requests.fetchDQsPick)
      //     //Give to our movie hook one of all the movies randomly
      //     setMovie(request.data.result[
      //         Math.floor(Math.random() * request.data.result.length -1)
      //     ]);
      //     return request;
      // }
      // fetchData();
      // if (rating.length > 0) {
      //   const user_based_param = rating.join("&param=");
      //   const url = `https://hustlecoding.link/user-based/?params=${user_based_param}`;
      //   setPersonalizeUrl(url);
      // }
      console.log(personalizeUrl);
  },[]);

  return (
    <div className="app">
      {/**NAV */}
      <Nav/>
      {/*BANNER*/}
      <Banner />

      <Row
        title="Recommend For You"
        id="RF"
        fetchUrl={personalizeUrl}
      />

      <Row
        title="DQ's Pick"
        id="DP"
        fetchUrl={requests.fetchDQsPick}
      />
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Horror Movies"
        id="HM"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="Romance  Movies"
        id="RM"
        fetchUrl={requests.fetchRomanceMovies}
      />
    </div>
  );
}

export default App;
