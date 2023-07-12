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
  > div{
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
.total{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;
      span{
        font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
      }
    }
  .order-itens{

    margin-top: 16px;


  .item{
   display: flex;
      & + .item{
        margin-top: 16px;
      }
      img{
        border-radius: 6px;

      }
      .quantity{
        font-size: 14px;
        color:#666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }
      .details{
        margin-left: 4px;

        strong{
          display: block;
          margin-bottom: 4px;

        }
        span{
          font-size: 14px;
          color: #666;
        }
      }
    }

    }


`

export const Actions = styled.footer`
margin-top: 32px;
  display: flex;
  flex-direction: column;
.finish-order{
  background: #333;
  border-radius: 48px;
  border: 0;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap:8px;
  justify-content: center;
  strong{
    color:#fff;
  }

}
.cancel-order{
  margin-top: 12px;
  font-weight: bold;
  padding: 14px 28px;
  color:#D73035;
    background: none;
    outline:none;
    border: 0;
  }

`
