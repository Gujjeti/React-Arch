import { describe, it } from "vitest";
import ProductsList from "../ProductsList";
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer, {fetchByProducts} from '../productsSlice'
describe('Product List Component',() =>{

it('Should render loading state correctly', () => {
  const store = configureStore({
    reducer: {
      products: productsReducer,
    },
  });

  // 1. Correct spelling of "fetch" 
  // 2. No need to pass 'loading: false' here; the reducer handles the state change
  store.dispatch({
    type: fetchByProducts.pending.type, 
  });

  render(
    <Provider store={store}>
      <ProductsList />
    </Provider>
  );

  // Use a regex to be safe with casing/whitespace
  expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();
});


it('should render list of products correctly', async () => {
  const store = configureStore({
    reducer: { products: productsReducer },
  });

  const mockProducts = [{ id: 2, title: 'Mens Casual Premium Slim Fit T-Shirts', description: 'desc', price: 999, image: '' }];

  // ✅ Use the .type property from the actual action creator
  store.dispatch({
    type: fetchByProducts.fulfilled.type, 
    payload: mockProducts, 
  });

  render(
    <Provider store={store}>
      <ProductsList />
    </Provider>
  );

  // Now the component should see loading: false and the list
  const item = await screen.findByText('Mens Casual Premium Slim Fit T-Shirts');
  expect(item).toBeInTheDocument();
});






})