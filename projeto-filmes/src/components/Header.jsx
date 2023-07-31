import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "../style/pages/navbar.sass";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate();

  const handleSubmit = () =>{
    if (!search) return
    navigate(`/search?q=${search}`)
    setSearch('')
  }

  return (
    <header>
      <nav className="navbar">
        <div className="logo">  
          <Link className="links" to="/">
            <h2>
              Cineflix
            </h2>
            <span>
              <BiCameraMovie />
            </span>
          </Link>
        </div>
        <div className="search-region">
          <input
            type="search"
            className="search-input"
            placeholder="Buscar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          >
          </input>
          <button onClick={handleSubmit} className="search-btn" type="submit">
          <BiSearchAlt2 />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
