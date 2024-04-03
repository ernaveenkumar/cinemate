import { Link, NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <nav className="navbar flex flex-row flex-wrap justify-between items-center">

        <Link to="/">
          <div className="nav-item logo-slogan flex flex-row flex-wrap items-center">
            <img src="./cinema-logo.png" alt="Cinemate" className="nav-link w-16" />
            <span className="font-bold">Cinemate</span>
          </div>
        </Link>
        <div className="nav-item flex flex-row flex-wrap font-medium justify-evenly w-6/12">
          <NavLink to="/" className="nav-link px-2.5 py-2.5" end>Home</NavLink>
          <NavLink to="movies/popular" className="nav-link px-2.5 py-2.5">Popular</NavLink>
          <NavLink to="movies/toprated" className="nav-link px-2.5 py-2.5">Top Rated</NavLink>
          <NavLink to="movies/upcoming" className="nav-link px-2.5 py-2.5">Upcoming</NavLink>

        </div>
        <div className="nav-item themesearch font-medium">
          <button className="nav-link themechangebutton px-1.5 bg-neutral-100 rounded px-1.5 py-1.5">*</button>
          <input type="text" className="search bg-neutral-100 ml-0.5 padding px-1.5 py-1.5" value="search..." />
        </div>
      </nav>

    </>
  )
}
