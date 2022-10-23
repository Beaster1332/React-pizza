import React from "react";
import { Card, CardMedia, Grid, CardContent, Typography, CardActions, Button } from "@mui/material";

const PizzaItem = ({ pizzaName, description, weight, addPizza, id }) => {
    return <Grid item xs={12} md={4}>
        <Card>
            <CardMedia
                component="img"
                height="140"
                image=""
                alt={pizzaName}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                >
                    {pizzaName}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    {description}
                </Typography>
                <Typography
                    sx={{ mt: '10px', fontWeight: 600 }}
                    variant="body1"
                    color='text.secondary'
                >
                    {weight}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => addPizza(id)}>Добавить +</Button>
            </CardActions>
        </Card>
    </Grid>
}

export default PizzaItem;