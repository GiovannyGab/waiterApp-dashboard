import { Actions, Container, OrderDetails, Overlay } from "./styles";
import closeIcon from '../../assets/images/close-icon.svg'
import { Order } from "../../types/Order";
import formatCurrency from "../../utils/formatCurrency";
interface OrderModalProps{
  visible: boolean
  order: Order | null
  onClose: ()=> void
}
export default function OrderModal ({visible,order,onClose}:OrderModalProps){
  if(!visible || !order){
    return null
  }
  let total = 0
  order.products.forEach(({product,quantity})=>{
  total +=  product.price * quantity
  })

  return(
<Overlay>
  <Container>
    <header>
      <strong>Mesa {order.table}</strong>
      <button type="button" onClick={onClose}><img src={closeIcon} alt="close-icon"/></button>
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

   <div className="order-itens">
   {order.products.map(({_id,product,quantity})=>(
      <div className="item"  key={_id}>
        <img
        src={`http://localhost:3001/uploads/${product.imagePath}`}
         alt={product.name}
         width="56"
         height="28.51"
        />
        <span className="quantity">{quantity}x</span>
        <div className="details">
          <strong>{product.name}</strong>
          <span>{formatCurrency(product.price)}</span>
        </div>

      </div>
    ))}
   </div>
   <div className="total">
    <span>Total</span>
    <strong>{formatCurrency(total)}</strong>
   </div>

    </OrderDetails>
    <Actions>
    <button type="button" className="finish-order">
      <span>👩‍🍳</span>
      <strong>Finalizar Pedido</strong>
      </button>
    <button type="button" className="cancel-order" onClick={onClose}>Cancelar Pedido</button>
    </Actions>
  </Container>
</Overlay>

  )
}
