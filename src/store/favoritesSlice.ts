import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [], 
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const newItem = action.payload;
      
      const existingItemIndex = state.items.findIndex(
        item => item.id === newItem.id
      );

      if (existingItemIndex >= 0) {
        state.items.splice(existingItemIndex, 1);
      } else {
        state.items.push(newItem);
      }
    },
    removeItem: (state, action) => {
      // payload باید ID آیتمی باشد که می‌خواهیم حذف کنیم
      const itemIdToRemove = action.payload; 
      
      // فیلتر کردن (Filter) بهترین و ایمن‌ترین روش برای حذف در Redux است،
      // زیرا یک آرایه جدید برمی‌گرداند و حالت قبلی را تغییر نمی‌دهد (Immutable)
      state.items = state.items.filter(item => item.id !== itemIdToRemove);
    },
  },
});

export const { toggleFavorite, removeItem } = favoritesSlice.actions;

export const selectFavorites = (state: any) => state.favorites.items;

export default favoritesSlice.reducer;