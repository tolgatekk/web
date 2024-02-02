

export const CartReducer = (state, action) => {
    switch(action.type){
        case 'ADDPRODUCT' : return {cart:[...state.cart,action.payLoad]}
        case 'RESETPRODUCT' : return {cart:[]}
        case 'DELETEPRODUCT' : return {cart: state.cart.filter(product => product.id !== action.payLoad.id)}
        default : return state
    }
}