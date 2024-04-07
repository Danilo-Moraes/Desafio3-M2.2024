import styled,{css} from "styled-components";

const center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    height: 45vh;
    text-align: center;
    background-color: white;
    border-radius: 13px;
    p {
        height: 9vh;
        ${center}
    }
    button {
        background-color: #FFBC0D;
        border: none;
        padding: 10px 20px;
        border-radius: 10px;
    }
    img {
        border-top-right-radius: 13px;
        border-top-left-radius: 13px;
    }
`