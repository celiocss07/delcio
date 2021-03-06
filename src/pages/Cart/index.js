import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { Container,ProductTable, Total } from './styles';
import {connect} from 'react-redux';
import * as CartActions from './../../store/modules/cart/actions'
import { bindActionCreators } from 'redux';
import {formatPrice} from '../../util/format'
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import GlobalStyles from './../../styles/global'
import Modal from './../../components/Modal/index'
function Cart( { cart, removeFromCart, updateAmount, total}) {

  function increment(product) {
    updateAmount(product.id, product.amount + 1)
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1)
  }


  return(
    <div>
      <Header />
      <GlobalStyles />
      <Modal />
    <Container>
      
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
            {
              cart.map( product => (
                <tr key={product.id}>
                <td>
                  <img 
                    src={product.image}
                    alt={product.title} 
                  />
                </td>
                <td>
                  <strong>{product.title} </strong>
                  <span>{product.priceFormatted} </span>
                </td>
    
                <td>
                  <div>
                    <button 
                      type="button"
                      onClick = { () => decrement(product)}
                    >
                      <MdRemoveCircleOutline size={20} color="#da552f" />
                    </button>
    
                    <input type="number" readOnly value={product.amount}/>
    
                    <button 
                      type="button"
                      onClick = { () => increment(product)}
                    >
                      <MdAddCircleOutline size={20} color="#da552f" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.subTotal}</strong>
                </td>
                <td>
                  <button 
                     type="button"
                     onClick={
                       () => removeFromCart(product.id)
                     }
                    >

                      <MdDelete size={20} color="#da552f" />


                  </button>
                </td>
    
              </tr>
              ))
            }
        </tbody>
      </ProductTable>

      <footer>
        <button 
          type="button"
          onClick= { () => {

          }} 
        >Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
      
    </Container>
    <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart.map( product => ({
    ...product,
    subTotal: formatPrice(product.amount * product.price)
  })),

  total: formatPrice(
    state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0)
  ),
  
})

const mapDispatchToProps = dispatch => 
      bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);