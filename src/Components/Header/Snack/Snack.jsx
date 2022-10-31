import React from "react";
import { Snackbar, Alert } from "@mui/material";

const Snack = ({ isSnackOpen, closeSnack }) => {
    return <Snackbar
        open={isSnackOpen}
        onClose={closeSnack}
        autoHideDuration={3000}
    >
        <Alert onClose={closeSnack} severity="success">Товар добавлен в корзину!</Alert>
    </Snackbar>
}

export default Snack;