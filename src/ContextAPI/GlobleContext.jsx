import {createContext,useState} from 'react';
import {data,cart} from './data'

export const initialGlobelContext  = createContext([{}]);

export const GlobleContext = ({children}) =>{
    const [shoeData,setShoeState] = useState(data);
    const [cartData,cartSetState] = useState(cart); 
    return(
        <initialGlobelContext.Provider value={{shoe:shoeData,cart:cartData,cartSetStates:cartSetState}}>{children}</initialGlobelContext.Provider>
    );
}
