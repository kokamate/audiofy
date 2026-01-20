import '../css/Home.css'
import Logo from '../assets/unnamed.png'
import { FaHome, FaSearch, FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <header className="spotify-header">

      {/* BAL OLDAL */}
      <div className="header-left">
        <img src={Logo} alt="Spotify" className="spotify-logo" />

        <div className="home-icon" aria-label="Home">
          <FaHome />
        </div>

        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Mit szeretnél lejátszani?"
            aria-label="Keresés"
          />
        </div>

        <div className="header-right">
          <a href="#" className="nav-link">Premium</a>
          <a href="#" className="nav-link">Támogatás</a>
          <a href="#" className="nav-link">Letöltés</a>

          <span className="divider"></span>

          <a href="#" className="nav-link install">
            <FaDownload /> Alkalmazás telepítése
          </a>

          <a href="#" className="nav-link">Regisztráció</a>

          <button className="login-btn" type="button">Bejelentkezés</button>
        </div>
      </div>


    </header>
  )
}
