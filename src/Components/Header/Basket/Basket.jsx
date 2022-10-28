import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import OrderItem from "./OrderItem/OrderItem";

const Basket = ({ order, isCartOpen, onCloseCart, removeItemFromCart }) => {

    let orderItems = order.map(o => <OrderItem
        key={uuidv4()}
        itemName={o.pizzaName}
        removeItem={() => removeItemFromCart(o.id)}
    />)

    return <Drawer
        anchor='right'
        open={isCartOpen}
        onClose={onCloseCart}
    >
        <List sx={{ width: '400px' }}>
            <ListItem>
                <ListItemIcon>
                    <ShoppingCart />
                </ListItemIcon>
                <ListItemText
                    primary='Корзина'
                />
            </ListItem>
            <Divider />
            {!order.length ?
                <ListItem>Корзина пуста</ListItem> :
                orderItems
            }
        </List>
    </Drawer>
}

export default Basket;