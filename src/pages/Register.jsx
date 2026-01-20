import '../css/Register.css'
import Logo from '../assets/audio.png'

export default function Register() {
    return (
        <>
            <div className="logo">
                <img src="./img/mainlogo.png" alt="Audify" />
            </div>
            <div className="main">
                <h1>Regisztrálj a</h1>
                <h1>zenehallgatás</h1>
                <h1>elindításához</h1>

                <div className="mail">
                    <p>E-mail-cím</p>
                    <input placeholder="nev@domain.com" type="email" id="email-boxes" />
                </div>

                <div className="button-next">
                    <button>Következő</button>
                </div>
                <p className="or">vagy</p>
                <div className="bottom-reg">
                    <button className="reg-mail">Regisztráció Google-fiókkal</button><br />
                    <button className="reg-apple">Regisztráció Apple-lel</button>
                </div>

                <p className="bottom-user">Már van fiókod?</p>
                <div className="footer-login">
                    <button>Bejelentkezés</button>
                </div>
                <div className="bottom-footer">
                    <p>This site is protected by reCAPTCHA and the Google</p>
                    <a href="">Privacy Policy</a> and <a href="">Terms of service</a>
                </div>


            </div>
        </>
    )
}
