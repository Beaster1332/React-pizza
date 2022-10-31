import React from "react";
import { IconButton, ListItem, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Close } from "@mui/icons-material";

const OrderItem = (props) => {

    const {
        quantity,
        plusPizza,
        minusPizza,
        itemName,
        removeItem
    } = props;

    return <ListItem
        sx={{
            justifyContent: 'space-between'
        }}
    >
        <div>
            {itemName}
        </div>
        <IconButton
            disabled={quantity === 0}
            onClick={() => minusPizza()}
        >
            <KeyboardArrowLeftIcon />
        </IconButton>
        <Typography
            variant="body1"
        >
            {quantity}
        </Typography>
        <IconButton
            onClick={() => plusPizza()}
        >
            <KeyboardArrowRightIcon />
        </IconButton>
        <IconButton
            onClick={() => removeItem()}
        >
            <Close />
        </IconButton>
    </ListItem>
}

export default OrderItem;