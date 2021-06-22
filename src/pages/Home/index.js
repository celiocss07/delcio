import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { ProductList } from './styles';
import { formatPrice } from '../../util/format'; 
import {connect} from 'react-redux';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import * as CartActions from '../../store/modules/cart/actions'
import { bindActionCreators } from 'redux';
import GlobalStyles from './../../styles/global'

class Home extends Component {

  state = {
    products: [],
  }

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }))
    console.log(data)

    this.setState({ products: data});
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

 render() {

  const {products} = this.state;
  const {amount}  = this.props;


  return(
    <div>
      <Header />
      <GlobalStyles />
      <ProductList>
      {products.map( (product) => (

          <li key={product.id}> 
          <img src={product.image}
           alt={product.title} 
          />
          <strong>{product.title}</strong>
          <span>tamanhos: {product.size.map( (item, index) => {
              if(index > 0){
                return `, ${item}`
              }else {
                return item
              }
          })}</span>
          <span> {product.priceFormatted}</span>

          <button
            type="button"
            onClick= { () => this.handleAddProduct(product)}

           >
            <div>
               <MdAddShoppingCart size={16} color="#FFF" />
               {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>

          </button>
          </li>
      ))}
       
      
    </ProductList>
    <Footer />
    </div>
)
 }
}

const mapDispatchToProps = dispatch => 
      bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  
  amount: state.cart.reduce( (amount, product)=> {
      amount[product.id] = product.amount;


      return amount;
  }, { })
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)

