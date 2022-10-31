import { v4 as uuidv4 } from "uuid";

const ADD_PIZZA_TO_CART = 'itemsField/ADD_PIZZA_TO_CART';
const PLUS_PIZZA = 'itemsField/PLUS_PIZZA';
const MINUS_PIZZA = 'itemsField/MINUS_PIZZA';
const ON_OPEN_CART = 'itemsField/ON_OPEN_CART';
const ON_CLOSE_CART = 'itemsField/ON_CLOSE_CART';
const REMOVE_ITEM_FROM_CART = 'itemsField/REMOVE_ITEM_FROM_CART';

let initialState = {
    pizzaCatalog: [
        { name: 'Маргарита', weight: '500 гр', description: 'Типичная неаполитанская пицца, приготовленная из помидоров Сан-Марцано, сыра моцарелла, свежего базилика, соли и оливкового масла первого отжима.', id: 1, src: 'https://img.taste.com.au/DhThzPm9/taste/2016/11/eat-pray-love-39581-3.jpeg' },
        { name: 'Охотничья', weight: '550 гр', description: 'Тонкая пицца с добавлением обильного количества охотничьих колбасок, сыра, а также соуса. Колбаса очень вкусна, сыр даёт тонкие нотки игры на гитаре.', id: 2, src: 'https://papitospizza.ru/wa-data/public/shop/products/25/00/25/images/282/282.320@2x.jpg' },
        { name: 'Гавайская', weight: '450 гр', description: 'Самая что ни на есть специфическая пицца, которую может полюбить отнюдь не каждый. Всё негодование любителей пиццы обосновано наличием в пицце ананасов.', id: 3, src: 'https://cdn.lifehacker.ru/wp-content/uploads/2021/01/1_1611130322-e1611130395948-1280x640.jpg' },
    ],
    clientCart: [],
    isCartOpen: false
}

const itemsFieldReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_TO_CART:
            return {
                ...state,
                clientCart: [ ...state.clientCart,
                    { id: uuidv4(), pizzaName: action.pizzaName, quantity: 0 }
                ]
            }
        case PLUS_PIZZA:
            return {
                ...state,
                clientCart: state.clientCart.map(pizza => pizza.id === action.pizzaId ?
                    { ...pizza, quantity: ++pizza.quantity } :
                    pizza
                )
            }
        case MINUS_PIZZA:
            return {
                ...state,
                clientCart: state.clientCart.map(pizza => pizza.id === action.pizzaId ?
                    { ...pizza, quantity: --pizza.quantity } :
                    pizza
                )
            }
        case ON_OPEN_CART:
            return {
                ...state,
                isCartOpen: true
            }
        case ON_CLOSE_CART:
            return {
                ...state,
                isCartOpen: false
            }
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                clientCart: [...state.clientCart.filter(el => el.id !== action.itemId)]
            }
        default:
            return state;
    }
}

export const addPizzaToCartAC = (pizzaName) => ({ type: ADD_PIZZA_TO_CART, pizzaName });
export const plusPizzaAC = (pizzaId) => ({ type: PLUS_PIZZA, pizzaId });
export const minusPizzaAC = (pizzaId) => ({ type: MINUS_PIZZA, pizzaId });
export const onOpenCartAC = () => ({ type: ON_OPEN_CART });
export const onCloseCartAC = () => ({ type: ON_CLOSE_CART });
export const removeItemFromCartAC = (itemId) => ({ type: REMOVE_ITEM_FROM_CART, itemId });

export default itemsFieldReducer;