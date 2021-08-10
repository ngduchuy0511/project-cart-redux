import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import * as Message from './../constants/Message'
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { actChangeMessage, actDeleteProductInCart, actUpdateProductInCart } from '../actions';

class CartContainer extends Component {
    showTotalAmount=(cart)=>{
        var result=null;
        if (cart.length>0) {
            result = <CartResult cart={cart}/>
        }
        return result
    }
    showCartItem=(cart)=>{
        var {onDeleteProductToCart,onChangeMessage,onUpdateProductInCart} =this.props;
        var result=<tr>
                <td>{Message.MSG_CART_EMPTY}</td>
            </tr>;
        if (cart.length>0) {
            result=cart.map((item,index)=>{
                return(
                    <CartItem key={index} item={item} index={index}
                     onDeleteProductToCart={onDeleteProductToCart}
                     onChangeMessage={onChangeMessage}
                     onUpdateProductInCart={onUpdateProductInCart}
                     />
                );
            })
        }
        return result 
    }
    render() {
        var {cart}=this.props
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart> 

        );
    }
    
}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
            }).isRequired,
            quantity: PropTypes.number.isRequired,
        }),
    ).isRequired,
        onDeleteProductToCart:PropTypes.func.isRequired,
        onUpdateProductInCart:PropTypes.func.isRequired,
        onChangeMessage:PropTypes.func.isRequired,
}

const mapStateProps = (state) => {
    return {
        cart :state.cart
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        onDeleteProductToCart:(product)=>{
            dispatch(actDeleteProductInCart(product))
        },
        onChangeMessage:(message)=>{
            dispatch(actChangeMessage(message))
        },
        onUpdateProductInCart:(product,quantity)=>{
            dispatch(actUpdateProductInCart(product,quantity))
        },
    }
}
export default connect(mapStateProps, mapDispatchToProps)(CartContainer);