import '../css/Home.css'
import Logo from '../assets/audio.png'

export default function Home() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={Logo} alt="Audify" />
        </div>

        <input type="text" className="search-bar" placeholder="Mit szeretnél lejátszani?" />
        <img src="./img/search-interface-symbol.png" alt="Keresés" className="search-icon" />

        <div className="nav-links">
          <a href="" className="">Támogatás</a>
          <a href="register.html" className="btn-Register">Regisztráció</a>
          <button className="btn-Login">Bejelentkezés</button>
        </div>

      </header>

      {/* Sidebar  */}
      {/* <div className="sidebar">
        <div className="sidebar-section">
          <h3>Hozd létre az első műsorlistád!</h3>
          <p>Pofonegyszerűen, ráadásul még segítünk is.</p>
          <button class="btn-primary">Műsorlista létrehozása</button>
        </div>


        <div class="sidebar-section-second">
          <div>
          </div>
          <h3>Keresünk pár podcastot, amelyet követhetsz!</h3>
          <p>Szólni fogunk, ha van új epizód.</p>
          <button class="btn-secondary">Podcastok böngészése</button>
        </div>
        <div class="sidebar-section-legal">
          <a href="">Jogi tudnivalók</a>
          <br>
            <a href="">Biztonsági és adatvédelmi központ</a>
            <br />
            <a href="">Adatvédelmi szabályzat</a>
            <br /><br>
              <a href="">Cookie- beállítások <span class="advert">A reklámokról</span></a>
              <br>
                <a href="">Kisegítő lehetőségek</a>
                <br>
                  <a href="" class="cookie">Cookie-k</a>
                </div>
              </div> */}

      {/* <div class="bottom-register">
        <div class="bottom-register-text">
          <h4>Belehallgatás a Spotifyba</h4>
          <p>Regisztrálj, és máris korlátlan hozzáférésed lesz a dalokhoz és podcastokhoz, alkalmankénti reklámokkal.
            Nem kell hozzá hitelkártya.</p>
        </div>
        <button>Ingyenes regisztráció</button>
      </div>
      <div /> */}
    </>
  )
}
