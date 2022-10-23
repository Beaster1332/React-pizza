import { connect } from "react-redux";
import { addPizzaAC } from "../../redux/itemsFieldReducer";
import ItemsField from "./ItemsField";

const mapStateToProps = (state) => {
    return {
        pizzaCatalog: state.itemsFieldReducer.pizzaCatalog,
        clientCart: state.itemsFieldReducer.clientCart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPizzaToCart: (pizzaId) => dispatch(addPizzaAC(pizzaId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsField)