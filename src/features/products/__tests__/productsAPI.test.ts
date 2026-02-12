import { vi, describe, it, expect } from 'vitest';
import axios from 'axios';
import { productsAPI } from '../productsAPI';

// 1. Mock the entire axios module
vi.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('productsAPI', () => {
  it('should return data when the API call is successful', async () => {
    const mockProducts = [{ id: 1, title: 'Product A' }];
    
    // Simulate a successful response
    mockedAxios.get.mockResolvedValue({ data: mockProducts });

    const result = await productsAPI(); 
    
    expect(axios.get).toHaveBeenCalledWith("https://fakestoreapi.com/products");
    expect(result).toEqual(mockProducts);
  });

  it('should log an error and throw when the API call fails', async () => {
    // 2. This will cover your "catch" block (Branch coverage!)
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    mockedAxios.get.mockRejectedValue(new Error('Network Error'));

    await expect(productsAPI()).rejects.toThrow('Network Error');
    expect(consoleSpy).toHaveBeenCalled();
    
    consoleSpy.mockRestore();
  });
});
