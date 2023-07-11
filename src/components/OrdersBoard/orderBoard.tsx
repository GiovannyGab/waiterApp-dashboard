import { Order } from "../../types/Order";
import OrderModal from "../OrderModal/OrderModal";
import { Board,OrdersContainer } from "./styles"
import {useState} from 'react'
interface OrderBoardProps{
  icon: string;
  title:string;
  quantity:string
  orders:Order[];

}
export default function OrderBoard({icon,title,orders}:OrderBoardProps){
  const [isModalvisible, setIsModalVisible] = useState(false)
  const [selectedOrder, setselectedOrder] = useState<null | Order>(null)
  function handleOpenModal(order:Order){
 setIsModalVisible(true)
setselectedOrder(order)
  }
  return(
    <Board>
      <OrderModal
      visible={isModalvisible}
      order={selectedOrder}
      />
    <header>
      <span>{icon}</span>
      <strong>{title}</strong>
      <span>({orders.length})</span>
    </header>
    {orders.length >0 && (
       <OrdersContainer>
       {orders.map((order)=>(
           <button type="button" key={order._id} onClick={()=>handleOpenModal(order)}>
           <strong>Mesa {order.table}</strong>
           <span>{order.products.length}</span>
         </button>

       ))}

     </OrdersContainer>
    )}

    </Board>
  )
}
