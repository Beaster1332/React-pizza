import React from "react";
import { Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import OrderItem from "./OrderItem/OrderItem";
import DialogWindow from "./DialogWindow/DialogWindow";

const Basket = (props) => {

    const {
        order,
        isCartOpen,
        onCloseCart,
        plusPizza,
        minusPizza,
        removeItemFromCart,
        makeOrder,
        isDialogOpen,
        onCloseDialog,
    } = props;

    let orderItems = order.map(o => <OrderItem
        key={o.id}
        itemName={o.pizzaName}
        price={o.price}
        quantity={o.quantity}
        plusPizza={() => plusPizza(o.id)}
        minusPizza={() => minusPizza(o.id)}
        removeItem={() => removeItemFromCart(o.id)}
    />);

    let finalPrice = order.reduce((total, amount) => {
        return total + amount.price * amount.quantity;
    }, 0);

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
            <Divider />
            <ListItem
                sx={{
                    justifyContent: 'space-between',
                    mb: '20px'
                }}
            >
                <Typography
                    variant="h6"
                >
                    Итого
                </Typography>
                <Typography
                    variant="h6"
                >
                    {finalPrice} руб
                </Typography>
            </ListItem>
            <ListItem
                sx={{
                    justifyContent: 'center'
                }}
            >
                <Button
                    variant='outlined'
                    disabled={!order.length}
                    onClick={() => makeOrder(order)}
                >
                    Сделать заказ
                </Button>
            </ListItem>
        </List>
        <DialogWindow
            isDialogOpen={isDialogOpen}
            onCloseDialog={() => onCloseDialog()}
        />
    </Drawer>
}

export default Basket;