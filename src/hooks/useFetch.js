import { useState, useEffect } from "react";

export const useFetch = (api_url_keyword, queryTerm = "") => {
  /*
  const [myurl, setMyurl] = useState("");
  let url = `https://api.themoviedb.org/3/movie/${get_api_url}?api_key=a305b3cd14262557247584dfa43c0362`;
  setMyurl(url);
  let imagepath = "https://image.tmdb.org/t/p/w500/";
  */
  console.log("api key" + process.env.REACT_APP_API_KEY);
  const [data, setData] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzA1YjNjZDE0MjYyNTU3MjQ3NTg0ZGZhNDNjMDM2MiIsInN1YiI6IjY2MDU1MDc0YzU4NDBkMDE2MWM0NzBlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NKHUMgI9SNcY9Kh7lIslIFsq9NqWk8HQhI8iq9hNoV0`
    }
  };
  useEffect(function () {

    async function fetchMovies() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/${api_url_keyword}?language=en-US&page=1&query=${queryTerm}`, options)
        https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1search/movie?include_adult=false&language=en-US&page=1
        if (!response.ok) {
          throw new Error('Request failed with status ' + response.status);
        }
        const json = await response.json();
        setData(json.results);
      } catch (error) { console.log('Error:', error); }
      //return () => console.log('cleanup');
    } fetchMovies();
  }, [api_url_keyword])
  return { data }
}
