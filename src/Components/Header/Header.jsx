import React from "react";
import BasketContainer from './Basket/BasketContainer.jsx';
import Snack from './Snack/Snack.jsx';
import { AppBar, Toolbar, IconButton, Typography, Container, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const Header = ({ onOpenCart, orderLength, isSnackOpen, onCloseSnack }) => {
    return <AppBar position="static">
        <Container>
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    React Pizza
                </Typography>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => onOpenCart()}
                >
                    <Badge
                        color="secondary"
                        badgeContent={orderLength}
                    >
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </Toolbar>
        </Container>
        <BasketContainer />
        <Snack
            isSnackOpen={isSnackOpen}
            closeSnack={() => onCloseSnack()}
        />
    </AppBar>
}

export default Header;