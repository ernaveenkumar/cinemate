import { useFetch } from "./../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "./Component/MovieCard";

export const SearchMovieListPage = ({ get_api_url }) => {

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(get_api_url, queryTerm);
  //fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options)
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

