import { connect } from "react-redux";
import { addPizzaToCartAC } from "../../redux/itemsFieldReducer";
import ItemsField from "./ItemsField";

const mapStateToProps = (state) => {
    return {
        pizzaCatalog: state.itemsFieldReducer.pizzaCatalog,
        clientCart: state.itemsFieldReducer.clientCart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPizza: (pizzaName, price) => dispatch(addPizzaToCartAC(pizzaName, price))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsField);