import '../css/RegisterSecondPage.css'
import Logo from '../assets/audio.png'

export default function RegisterSecondPage() {
    return (
        <>
            <div className="logo">
                <img src="./img/mainlogo.png" alt="Audify" />
            </div>
            <hr />
            <div className="main">
                <p className="step">Lépés: 3/1</p>
                <h2>Adj meg egy jelszót</h2>

                <div className="pass">
                    <p>Jelszó</p>
                    <input placeholder="Jelszó" type="password" id="password" />
                </div>

                <h2>A jelszavadnak legalább az alábbiakat kell <br /> tartalaznia:</h2>
                <div className="radio">
                    <input type="radio" name="betu" value="1" />
                    1 betű
                </div>

                <div className="radio-second">
                    <input type="radio" name="betu" value="1" />
                    1 szám vagy különleges karakter(pl. #?!#)
                </div>

                <div className="radio-third">
                    <input type="radio" name="betu" value="1" />
                    10 karakter
                </div>

                <div className="button-next">
                    <button>Következő</button>
                </div>

                <div className="bottom-footer">
                    <p>This site is protected by reCAPTCHA and the Google</p>
                    <a href="">Privacy Policy</a> and <a href="">Terms of service</a>
                </div>
            </div>

        </>
    )
}



