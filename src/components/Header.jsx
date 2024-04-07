import * as S from "./styled.jsx"
import app1 from "../assets/app.jpg"
import app2 from "../assets/app2.jpg"
import logo from "../assets/logo.jpg"

export default function Header() {
  return (
    <S.head>
        <div className="first-card">
          <img src={logo} alt="Logo-Mac"/>
        </div>
        <S.cardRight>
            <div>
                <img src={app1} alt=""/>
                <p>Baixe o App</p>
            </div>
            <div className="second-card">
                <p>Peça seu Mequi</p>
                <img src={app2} alt=""/>
            </div>
        </S.cardRight>
    </S.head>
  )
}

