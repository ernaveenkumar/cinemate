import { useNavigate } from "react-router-dom";

export const MovieCard = ({ movie_data }) => {

  const navigate = useNavigate();

  const handle_movieDetailButtonClick = (id) => {
    return navigate(`/movies/detail/${id}`);
  }
  return (
    <>

      <div className="card flex flex-col w-56 bg-slate-100 ml-5 mb-4" key={movie_data.id}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie_data.poster_path}`} className="card-img-top" alt="..." />
        <div className="card-body flex flex-col">
          <h5 className="card-title text-base font-semibold py-2 text-center">{movie_data.original_title}
          </h5>
          <p className="card-text">{movie_data.overview.substring(0, 122)}</p>
        </div>
        <button type="button" className="btn btn-primary p-2 bg-orange-400 rounded" onClick={() => { handle_movieDetailButtonClick(movie_data.id) }}> Detail</button>
      </div>
    </>
  )
}
