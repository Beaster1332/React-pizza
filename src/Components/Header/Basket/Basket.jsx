import React from "react";
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import OrderItem from "./OrderItem/OrderItem";

const Basket = (props) => {

    const {
        order,
        isCartOpen,
        onCloseCart,
        plusPizza,
        minusPizza,
        removeItemFromCart
    } = props;

    let orderItems = order.map(o => <OrderItem
        key={o.id}
        itemName={o.pizzaName}
        quantity={o.quantity}
        plusPizza={() => plusPizza(o.id)}
        minusPizza={() => minusPizza(o.id)}
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