import styled,{createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins",sans-serif;
} 
`;

// HEADER //

export const head = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    .first-card img{
        margin-left: 10px;
        width: 50px;
    }
`;

export const cardRight = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 25vw;
    div{
        display: flex;
        align-items: center;
    }
    .second-card {
        background-color: #ff9900;
        padding: 5px;
        border-radius: 8px;
    }
    .second-card img{
        margin-left: 5px;
    }
`

// MAIN //

export const mainSec = styled.section`
    background-color: #ff9900;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
    }
    div img {
        width: 450px;
        height: 400px;
    }
`

export const mainTitle = styled.div`
    width: 35vw;
    h1 {
        font-size: 3rem;
        color: #fff;
    }
    h1 span{
       color: #ff0000;
    }
`
export const figures = styled.figure`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 10px;
    img {
        width: 100px;
        height: 100px;
    }
`

// PROMOÇOES //

export const Promocao = styled.div`
    background-color: #FEB706;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    h2{
        color: #fff;
    }
`

export const center = styled.div`
    width: 98vw;
    display: flex;
    justify-content: space-around;
`


// footer 

export const foot = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
`
export const footL = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    img {
        width: 30px;
    }
    p {
        font-size: 0.8rem;
        opacity: 0.6;                           
    }
`

export const footR = styled.div`
    display: flex;
    gap: 10px;
    img {
        width: 100px;
    }
`