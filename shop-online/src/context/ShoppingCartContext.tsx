
import { createContext, useContext, useState } from 'react';

interface IShoppingCartContext {
    children: React.ReactNode
}



interface CartItem {
    id: number
    qty: number
}

interface ShoppingCartContext {
    cartItems: CartItem []
    handleIncreaseProductQty: (id: number) => void
}


export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCartContext = () => {
    return useContext (ShoppingCartContext);
}

export function ShoppingCartProvider({children}: IShoppingCartContext) {
    const [cartItems, setCartItems] = useState<CartItem []>([]);

    const handleIncreaseProductQty = (id: number) => {
        setCartItems((currentItems) => {
          // بررسی می‌کنیم که آیا محصول با آی‌دی مورد نظر از قبل در سبد خرید وجود دارد یا نه
          let selectedItem = currentItems.find((item) => item.id == id);
          
          // اگر محصول در سبد خرید وجود نداشت
          if (selectedItem == null) {
            return [...currentItems, { id: id, qty: 1 }];
          } 
          // اگر محصول در سبد خرید وجود داشت
          else {
            return currentItems.map((item) => {
              if (item.id == id) {
                // اگر آی‌دی محصول با آی‌دی ورودی مطابقت داشت، تعداد آن را یک واحد افزایش می‌دهیم
                return { ...item, qty: item.qty + 1 };
              } else {
                // در غیر این صورت، محصول را بدون تغییر باز می‌گردانیم
                return item;
              }
            });
          }
        });
      };
      

    return (
        <ShoppingCartContext.Provider value={{cartItems , handleIncreaseProductQty}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
   


