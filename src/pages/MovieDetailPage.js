import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
export const MovieDetailPage = ({ api_url_keyword }) => {
  //movie/movie_id
  const params = useParams();

  const [data, setData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzA1YjNjZDE0MjYyNTU3MjQ3NTg0ZGZhNDNjMDM2MiIsInN1YiI6IjY2MDU1MDc0YzU4NDBkMDE2MWM0NzBlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NKHUMgI9SNcY9Kh7lIslIFsq9NqWk8HQhI8iq9hNoV0`
    }
  };
  useEffect(function () {

    async function fetchMovieDetail() {
      try {

        const response = await fetch(`https://api.themoviedb.org/3/movie/${params.pid}?language=en-US`, options)
        if (!response.ok) {
          throw new Error('Request failed with status ' + response.status);
        }
        const json = await response.json();
        setData(json);
        console.log(json);
      } catch (error) { console.log('Error:', error); }

    } fetchMovieDetail();

  }, []);








  return (
    <div>
      Movie Detail for pid {params.pid}

      <section>
        <div className="flex flex-row">
          <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
          <div className="ml-8">
            <h1 className="font-bolb text-4xl">{data.original_title}</h1>
            <p>{data.overview}</p>



            <div className="flex flex-row m-2">
              {data?.genres?.map((g) => (<button type="button" className="p-2 bg-orange-200 rounded m-1">{g.name}</button>))}


            </div>
            <div className="rating">
              <span>* {data.vote_average}</span>
              <span> - {data.vote_count} reviews</span>
            </div>
            <div className="flex flex-col">
              <span><b>Runtime :</b> {data.runtime}</span>
              <span><b>Budget :</b> 237000000</span>
              <span><b>Revenue :</b>{data.revenue}</span>
              <span><b>Release Date :</b>{data.release_date}</span>
              <span><b>IMDB Code :</b>{data.imdb_id}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}