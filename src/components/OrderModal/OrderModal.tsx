import { Container, OrderDetails, Overlay } from "./styles";
import closeIcon from '../../assets/images/close-icon.svg'
import { Order } from "../../types/Order";
interface OrderModalProps{
  visible: boolean
  order: Order | null
}
export default function OrderModal ({visible,order}:OrderModalProps){
  if(!visible || !order){
    return null
  }
  return(
<Overlay>
  <Container>
    <header>
      <strong>Mesa {order.table}</strong>
      <button type="button"><img src={closeIcon} alt="close-icon"/></button>
    </header>

    <div className="status-container">
      <small>Status do Pedido</small>
      <div>
        <span>{order.status === "WAITING" &&"⏱"}
        {order.status === "IN_PRODUCTION" &&"👩‍🍳"}
        {order.status === "DONE" &&"✅"}
        </span>
        <strong>
        {order.status === "WAITING" &&"Fila De Espera"}
        {order.status === "IN_PRODUCTION" &&"Em Produção"}
        {order.status === "DONE" &&"Pronto"}
        </strong>
      </div>
    </div>
    <OrderDetails>
    <strong>Itens</strong>

    </OrderDetails>
  </Container>
</Overlay>

  )
}
