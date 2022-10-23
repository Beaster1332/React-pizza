const ADD_PIZZA_TO_CART = 'itemsField/ADD_PIZZA_TO_CART';

let initialState = {
    pizzaCatalog: [
        { name: 'Маргарита', weight: '500 гр', description: 'Типичная неаполитанская пицца, приготовленная из помидоров Сан-Марцано, сыра моцарелла, свежего базилика, соли и оливкового масла первого отжима.', id: 1 },
        { name: 'Охотничья', weight: '550 гр', description: 'Тонкая пицца с добавлением обильного количества охотничьих колбасок, сыра, а также соуса.', id: 2 },
        { name: 'Гавайская', weight: '450 гр', description: 'Самая что ни на есть специфическая пицца, которую может полюбить отнюдь не каждый. Всё негодование любителей пиццы обосновано наличием в пицце ананасов.', id: 3 },
    ],
    clientCart: []
}

const itemsFieldReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_TO_CART:
            return {
                ...state,
                clientCart: state.pizzaCatalog.map(pizza => pizza.id === action.pizzaId ?
                    { pizza } : null
                )
            }
        default:
            return state;
    }
}

export const addPizzaToCartAC = (pizzaId) => ({ type: ADD_PIZZA_TO_CART, pizzaId });

export default itemsFieldReducer;