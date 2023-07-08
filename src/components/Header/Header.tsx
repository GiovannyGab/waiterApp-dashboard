/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Container, Content } from "./styles"
import logo from '../../assets/images/logo.svg'
export default function Header(){
  return(
    <Container>
      <Content>
      <div className="page-details">
        <h1>Pedidos</h1>
        <h2>Acompanhe os pedidos por aqui!</h2>
      </div>
      <div className="logo-header">
        <img src={logo} alt="logo"/>
      </div>
      </Content>

    </Container>
  )
}
