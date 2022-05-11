export const initialState = {
    basket: [],
    user : null
}

// SELECTOR
export const getBasketTotal = (basket)=>
   basket?.reduce((amount,item)=> item.price+amount, 0);


export const reducer = (state,{type,payload})=>{
    switch(type){
        case "ADD_TO_BASKET":
            return {...state, basket : [...state.basket,payload]}
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem)=> basketItem.id === payload
            );
            let newBasket = [...state.basket];

            if(index >= 0){
                newBasket.splice(index,1);
            }
            else{
                console.warn(
                    `can't remove product (id: ${payload}) as its not in basket!` 
                )
            }
            return {
                ...state,
                basket : newBasket
            }
        case "SET_USER":
            return {...state, user : payload}

        default :
            return state;
    }
}