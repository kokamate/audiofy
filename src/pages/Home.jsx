import '../css/Home.css'
import Logo from '../assets/audio.png'

export default function Home() {
  return (
    <>
      <header className="HomeHeader">
        <div className="logo">
          
        </div>

        <input
          type="text"
          className="search-bar"
          placeholder="Mit szeretnél lejátszani?"
        />

        <nav className="nav-links">
          <a href="#" className="css-download">Letöltés</a>
          <a href="#" className="application-download">Alkalmazás telepítése</a>
          <a href="register.html" className="btn-Register">Regisztráció</a>
          <button className="btn-Login">Bejelentkezés</button>
        </nav>
      </header>
    </>
  )
}
