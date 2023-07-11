import { styled } from "styled-components"

export const Overlay= styled.div`
left: 0;
right: 0;
background: rgba(0,0,0,0.8);
backdrop-filter: blur(4.5px);
width: 100%;
height: 100%;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`

export const Container= styled.div`
width: 480px;
background: #fff;
border-radius: 8px;
padding: 32px;
header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  strong{
    font-size: 24px;
  }
  button{
    display: flex;
  border: 0;
  background: #fff;
}
}
.status-container{
  margin-top: 32px;
  small{
    font-size:14px;
    opacity:0.8;
  }
  div{
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
`
export const OrderDetails = styled.div`
margin-top: 32px;
> strong{
  font-size: 14px;
  font-weight: 500;
  opacity: 0.8;
}
`
