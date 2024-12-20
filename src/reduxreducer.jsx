import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  quantity: { 1: 0, 2: 0, 3: 0, 4: 0 },
  items: [],
  total: 0,
};

const Slice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    additems: (state, action) => {
      const { name, price, index } = action.payload;
      const exist = state.items.find((item) => item.name === name);

      // If the item is not already in the cart, add it
      if (!exist) {
        state.items.push({ name, price, index });
      }

      // Update the quantity and total
      state.quantity[index] = (state.quantity[index] || 0) + 1;
      state.total += price;
    },
    removeitems: (state, action) => {
      const { name, price, index } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.name === name);

      // If the item exists, remove it or decrease its quantity
      if (existingItemIndex !== -1) {
        // Decrease the quantity first
        state.quantity[index] = Math.max((state.quantity[index] || 0) - 1, 0);

        // If quantity is 0, remove the item from the list
        if (state.quantity[index] === 0) {
          state.items.splice(existingItemIndex, 1);
        }

        // Decrease the total amount
        state.total -= price;
      }
    },
  },
});

export const { additems, removeitems } = Slice.actions;
export default Slice.reducer;
