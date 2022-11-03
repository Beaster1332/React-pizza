import React from "react";
import { Card, CardMedia, Grid, CardContent, Typography, CardActions, Button } from "@mui/material";

const PizzaItem = (props) => {

    const { pizzaName, description, weight, price, addPizza, imageSrc } = props;

    return <Grid item xs={12} md={4}>
        <Card>
            <CardMedia
                component="img"
                height="150"
                image={imageSrc}
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
                    sx={{ mt: '15px' }}
                >
                    {description}
                </Typography>
                <Typography
                    variant="body1"
                    color='text.secondary'
                    sx={{
                        mt: '10px',
                        fontWeight: 600
                    }}
                >
                    {weight}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={() => addPizza(pizzaName, price)}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: 600
                        }}
                    >
                        {price} руб
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    </Grid>
}

export default PizzaItem;