import { connect } from "react-redux"
import { minusPizzaAC, onCloseCartAC, plusPizzaAC, removeItemFromCartAC, makeOrderAC, onCloseDialogAC } from "../../../redux/itemsFieldReducer";
import Basket from "./Basket.jsx";

const mapStateToProps = (state) => {
    return {
        order: state.itemsFieldReducer.clientCart,
        isCartOpen: state.itemsFieldReducer.isCartOpen,
        isDialogOpen: state.itemsFieldReducer.isDialogOpen,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseCart: () => dispatch(onCloseCartAC()),
        plusPizza: (pizzaId) => dispatch(plusPizzaAC(pizzaId)),
        minusPizza: (pizzaId) => dispatch(minusPizzaAC(pizzaId)),
        removeItemFromCart: (itemId) => dispatch(removeItemFromCartAC(itemId)),
        makeOrder: (order) => dispatch(makeOrderAC(order)),
        onCloseDialog: () => dispatch(onCloseDialogAC())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);