import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "./Component/MovieCard";
//import { Card } from "./Component/Movie/Card";

//https://blog.stackademic.com/understanding-fetch-with-async-await-5289557d623a
export const MovieListPage = ({ api_url_keyword }) => {

  console.log("Movie List page url key word--  " + api_url_keyword);
  const { data: movies } = useFetch(api_url_keyword);
  console.log("api data" + movies);
  return (
    <>
      < div className="wrap flex flex-row flex-wrap justify-start" >
        {
          movies && movies.map((movie) => (
            <MovieCard key={movie.id} movie_data={movie} />
          ))
        }
      </div>
    </>
  )
}
