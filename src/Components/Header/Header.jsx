import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Container } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const Header = () => {
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
                >
                    <ShoppingCart />
                </IconButton>
            </Toolbar>
        </Container>
    </AppBar>
}

export default Header;