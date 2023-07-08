import { styled } from "styled-components";

export const Container= styled.header`
display: flex;
align-items: center;
justify-content: center;
height: 198px;
background-color:#D73035;


`

export const Content = styled.div`
display: flex;
width: 100%;
max-width: 1216px;
flex-direction: row;
align-items: center;
justify-content: space-between;
.page-details{
  h1{
    color: #fff;
    font-size:32px;
    margin-bottom: 6px;
  }
  h2{
    font-weight: 400;
    font-size: 16px;
    color:#fff;
    opacity:0.9;

  }
}

`
