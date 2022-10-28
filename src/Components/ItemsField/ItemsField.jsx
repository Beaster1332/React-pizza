import React from "react";
import { Container, Grid } from "@mui/material";
import PizzaItem from './PizzaItem/PizzaItem.jsx';

const ItemsField = (props) => {

    let pizzaItems = props.pizzaCatalog.map(
        p => <PizzaItem
            key={p.id}
            id={p.id}
            pizzaName={p.name}
            description={p.description}
            weight={p.weight}
            imageSrc={p.src}
            addPizza={props.addPizza}
        />
    )

    return <Container
        sx={{
            mt: '20px'
        }}
    >
        <Grid container spacing={2}>
            {pizzaItems}
        </Grid>
    </Container>
}

export default ItemsField;