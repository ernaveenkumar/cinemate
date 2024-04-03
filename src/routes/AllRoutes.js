import { Routes, Route } from "react-router-dom";
import { HomePage, PopularPage, TopRatedPage, UpcomingPage, MovieDetailPage, PageNotFound, MovieListPage, SearchMovieListPage } from "./../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieListPage api_url_keyword="now_playing" />} />
        <Route path="movies/popular" element={<MovieListPage api_url_keyword="movie/popular" />} />
        <Route path="movies/toprated" element={<MovieListPage api_url_keyword="movie/top_rated" />} />
        <Route path="movies/upcoming" element={<MovieListPage api_url_keyword="movie/upcoming" />} />
        <Route path="movies/search" element={<SearchMovieListPage api_url_keyword="movie/search/movie" />} />
        <Route path="movies/detail/:pid" element={<MovieDetailPage api_url_keyword="movie" />} />

        <Route path="*" element={<PageNotFound get_api_url="" />} />
      </Routes>
    </>
  )
}

