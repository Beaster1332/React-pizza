import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, } from "@mui/material";

const DialogWindow = (props) => {

    const { isDialogOpen, onCloseDialog } = props;

    return <Dialog
        open={isDialogOpen}
        onClose={onCloseDialog}
    >
            <DialogTitle>
                Спасибо за заказ!
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    В течение 30 - 60 минут Ваш заказ будет у Вас!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCloseDialog}>Ожидать</Button>
            </DialogActions>
    </Dialog>
}

export default DialogWindow;