import React from "react";
import { IconButton, ListItem } from "@mui/material";
import { Close } from "@mui/icons-material";

const OrderItem = (props) => {

    const { itemName, removeItem } = props;

    return <ListItem>
        {itemName}
        <IconButton
            onClick={() => removeItem()}
        >
            <Close />
        </IconButton>
    </ListItem>
}

export default OrderItem;