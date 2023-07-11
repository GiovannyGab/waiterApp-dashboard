import OrderBoard from "../OrdersBoard/orderBoard";
import { Container,} from "./styles";
import { Order } from "../../types/Order";
const orders:Order[]=[
  {
    "_id": "64a58a4a7d7f1e1e0db54d9a",
    "table": "123",
    "status": "DONE",
    "products": [
        {
            "product": {

                "name": "pizza 4 queijos",

                "imagePath": "1688515303954- quatro-queijos.png",
                "price": 40,



            },
            "quantity": 2,
            "_id": "64a58a4a7d7f1e1e0db54d9b"
        },
        {
            "product": {

                "name": "coca",

                "imagePath": "1688517636027- coca-cola.png",
                "price": 7,



            },
            "quantity": 3,
            "_id": "64a58a4a7d7f1e1e0db54d9c"
        }
    ],


}
]
export default function Orders(){

  return(
    <Container>

    <OrderBoard
    icon="⏱"
    title= "Fila de Espera"
    quantity="3"
    orders={orders}
    />
    <OrderBoard
     icon="👩‍🍳"
     title= "Em Preparo"
     quantity="3"
     orders={[]}
     />
    <OrderBoard
     icon="✅"
     title= "Pronto"
     quantity="3"
     orders={[]}
     />
    </Container>
  )
}
