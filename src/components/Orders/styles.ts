import { styled } from "styled-components";

export const Container = styled.div`
width: 100%;
max-width: 1216px;
display: flex;
flex-direction: row;
margin: 40px auto;
gap: 32px;
`

export const Board = styled.div`
flex: 1;
padding: 16px;
border: 1px solid rgba(204,204,204,0.4);
border-radius: 16px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
header{
  padding: 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}
`

export const OrdersContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 24px;
button{
  background: #fff;
  border-style: none;
  border: 1px solid rgba(204,204,204,0.4);
  height: 128px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  strong{
    font-weight: 500;
  }
  span{
    font-size: 14px;
    color:#666;
  }
  & + button{
    margin-top: 24px;
  }
}
`
