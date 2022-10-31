import { connect } from "react-redux";
import { onOpenCartAC, onCloseSnackAC } from "../../redux/itemsFieldReducer.js";
import Header from "./Header.jsx";

const mapStateToProps = (state) => {
    return {
        orderLength: state.itemsFieldReducer.clientCart.length,
        isSnackOpen: state.itemsFieldReducer.isSnackOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onOpenCart: () => dispatch(onOpenCartAC()),
        onCloseSnack: () => dispatch(onCloseSnackAC()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);