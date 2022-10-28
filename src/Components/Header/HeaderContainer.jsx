import { connect } from "react-redux";
import { onOpenCartAC } from "../../redux/itemsFieldReducer.js";
import Header from "./Header.jsx";

const mapStateToProps = (state) => {
    return {
        orderLength: state.itemsFieldReducer.clientCart.length,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onOpenCart: () => dispatch(onOpenCartAC()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);