import React from "react";
import { IconButton, ListItem, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Close } from "@mui/icons-material";

const OrderItem = (props) => {

    const {
        itemName,
        price,
        quantity,
        plusPizza,
        minusPizza,
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
            disabled={quantity === 0 || quantity === 1}
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
        <Typography
            variant="body2"
            color='text.secondary'
        >
            {price} руб x {quantity}
        </Typography>
        <IconButton
            onClick={() => removeItem()}
        >
            <Close />
        </IconButton>
    </ListItem>
}

export default OrderItem;