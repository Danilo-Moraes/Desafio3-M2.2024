import * as S from "./styled.jsx"
import logo from "../assets/logo.jpg"
import googleplay from "../assets/googlePlay.jpg"
import appstore from "../assets/appStore.jpg"

export default function Footer() {
  return (
    <S.foot>
      <S.footL>
          <img src={logo} alt="" />
          <p> © McDobalds 2024</p>
      </S.footL>
      <S.footR>
        <img src={googleplay} alt="" />
        <img src={appstore} alt="" />
      </S.footR>
    </S.foot>
  )
}
