import { Container, Overlay } from "./styles";
import closeIcon from '../../assets/images/close-icon.svg'
interface OrderModalProps{
  visible: boolean
}
export default function OrderModal ({visible}:OrderModalProps){
  if(!visible){
    return null
  }
  return(
<Overlay>
  <Container>
    <header>
      <strong>Mesa 2</strong>
      <button type="button"><img src={closeIcon} alt="close-icon"/></button>
    </header>

    <div className="status-container">
      <small>Status do Pedido</small>
      <div>
        <span>⏱</span>
        <strong>Fila De Espera</strong>
      </div>
    </div>
  </Container>
</Overlay>

  )
}
