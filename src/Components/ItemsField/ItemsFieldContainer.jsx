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
        addPizza: (pizzaId) => dispatch(addPizzaToCartAC(pizzaId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsField)