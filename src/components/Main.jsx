import { useState } from "react"
import * as S from "./styled.jsx"
import mac from "../assets/mcdonalds-big-mac.png"
import superBatata from "../assets/frita.png"
import sorvete from "../assets/sorvete.png"
import superSorvete from "../assets/supcasca.png"
import sofa from "../assets/sofa.jpg"
import loja from "../assets/loja.jpg"
import banner from "../assets/banner.jpg"
import Card from "./Card/Card.jsx"

export default function Main() {

    const[item, setItem] = useState(mac)
    
    function supermac(){
        setItem(mac)
    }
    function superbatata(){
        setItem(superBatata)
    }
    function supersorvete(){
        setItem(superSorvete)
    }

  return (
    <main>
        <S.mainSec>    
            <div>
                <img src={item} alt="" />
                <S.mainTitle>
                    <h1> BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI?</span> </h1>
                </S.mainTitle>
            </div>
            <S.figures>
                <img onClick={supermac} src={mac} alt="" />
                <img onClick={superbatata} src={superBatata} alt="" />
                <img onClick={supersorvete} src={sorvete} alt="" />
            </S.figures>
        </S.mainSec>
        <S.Promocao>
            <h2>Promoções</h2>
            <S.center>
                <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá"}/>
                <Card imagem={loja} texto={"Venha conhecer nossa loja"}/>
                <Card imagem={banner} texto={"Medidas que o Mequi adotou!!!"}/>
            </S.center>
        </S.Promocao>
    </main>
  )
}
