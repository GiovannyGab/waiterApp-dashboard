import OrderBoard from "../OrdersBoard/orderBoard";
import { Container,} from "./styles";

export default function Orders(){

  return(
    <Container>

    <OrderBoard
    icon="⏱"
    title= "Fila de Espera"
    quantity="3"
    />
    <OrderBoard
     icon="👩‍🍳"
     title= "Em Preparo"
     quantity="3"/>
    <OrderBoard
     icon="✅"
     title= "Pronto"
     quantity="3"/>
    </Container>
  )
}
