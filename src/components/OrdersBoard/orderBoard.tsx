import { Board,OrdersContainer } from "./styles"

interface OrderBoardProps{
  icon: string;
  title:string;
  quantity:string
}
export default function OrderBoard({icon,title,quantity}:OrderBoardProps){
  return(
    <Board>
    <header>
      <span>{icon}</span>
      <strong>{title}</strong>
      <span>({quantity})</span>
    </header>
    <OrdersContainer>
      <button type="button">
        <strong>Mesa 1</strong>
        <span>2 itens</span>
      </button>
      <button type="button">
        <strong>Mesa 1</strong>
        <span>2 itens</span>
      </button>
    </OrdersContainer>
    </Board>
  )
}
