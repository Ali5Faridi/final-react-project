
import { createContext, useContext, useState } from 'react';

interface IShoppingCartContext {
    children: React.ReactNode
}



interface CartItem {
    id: number
    qty: number
}

interface ShoppingCartContext {
    cartItems: CartItem [];
    handleIncreaseProductQty: (id: number) => void
    handleDecreaseProductQty: (id: number) => void
    getProductQty: (id: number) => number;
}


export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCartContext = () => {
    return useContext (ShoppingCartContext);
}

export function ShoppingCartProvider({children}: IShoppingCartContext) {
    const [cartItems, setCartItems] = useState<CartItem []>([]);

    const handleIncreaseProductQty = (id: number) => {
        setCartItems((currentItems) => {
       
          let selectedItem = currentItems.find((item) => item.id == id);
          
        
          if (selectedItem == null) {
            return [...currentItems, { id: id, qty: 1 }];
          } 
        
          else {
            return currentItems.map((item) => {
              if (item.id == id) {
               
                return { ...item, qty: item.qty + 1 };
              } else {
             
                return item;
              }
            });
          }
        });
      };

      const handleDecreaseProductQty = (id: number) => {
        setCartItems(currentItems=>{
            let selectedItem = currentItems.find((item) => item.id == id);

            if(selectedItem?.qty === 1){
                return currentItems.filter((item) => item.id !== id)
            }
            else {
                return currentItems.map((item) => {
                  if (item.id == id) {
              
                    return { ...item, qty: item.qty - 1 };
                  } else {
                 
                    return item;
                  }
                });
              }
        })
    }
         
      const getProductQty = (id: number) => {

       return  cartItems.find(item => item.id === id)?.qty || 0;
        
      }
      

    return (
        <ShoppingCartContext.Provider
         value={{cartItems , handleIncreaseProductQty , handleDecreaseProductQty , getProductQty}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
   

