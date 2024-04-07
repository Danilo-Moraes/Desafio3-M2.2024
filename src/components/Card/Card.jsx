import * as S from "./card_styled"

export default function Card({imagem, texto}) {
    return(
        <S.Card>
            <img src={imagem} alt="" />
            <p>{texto}</p>
            <button>Clique Aqui</button>
        </S.Card>
    )
}