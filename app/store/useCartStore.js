import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (product) =>
    set((state) => ({ cart: state.cart.filter((p) => p.id !== product.id) })),
  checkout: () => set(() => ({ cart: [] })),
}));

export default useCartStore;
