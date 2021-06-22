import React from 'react';
import { Link } from 'react-router-dom';
 import { Container, Cart, Menu,MenuItem } from './styles';
 import {connect} from 'react-redux';
 import { MdShoppingBasket } from 'react-icons/md';

function Header({ cartSize}) {


  return(
        <Container>

          <div>
          <Link to="/">
            <h1 style={{color:"#FFF"}}>DELEXPRESS</h1>
          </Link>
              <p>Endereço: Vila de Viana, Viana, Luanda</p>
              <p>E-mail: delciodaniel29@gmail.com</p>
              <p>Contacto: +244 946 114 409 </p>
          </div>


          <Menu >
            <li>
              <MenuItem to="/">
                Pagina Inicial
              </MenuItem>
            </li>
            <li>
              <MenuItem to="/sobre">
                Sobre
              </MenuItem>
            </li>
            <li>
              <MenuItem to="/contacto">
                Contacto
              </MenuItem>
            </li>
          </Menu>

          <Cart to="/cart">
            <div>
              <strong>Meu carrinho</strong>
              <span>{cartSize} itens</span>
              
            </div>
            <MdShoppingBasket size={40} color="#FFF" />;
          </Cart>

        </Container>
  );
}

export default connect( state => ({
  cartSize: state.cart.length
}))(Header);