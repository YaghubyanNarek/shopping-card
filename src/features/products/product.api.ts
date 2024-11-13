import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../utils/types';

const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5234' }),
  tagTypes: ['Products'], 

  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => 'products',
      providesTags: ['Products'], 
    }),

    addProduct: builder.mutation<IProduct, Omit<IProduct, 'id'>>({
      query: (newProduct) => ({
        url: '/products',
        method: 'POST',
        body: newProduct, 
      }),
      invalidatesTags: ['Products'], 
    }),

    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),

    updateProduct: builder.mutation<IProduct, IProduct>({
      query: (updatedProduct) => ({
        url: `/products/${updatedProduct.id}`,
        method: 'PUT',
        body: updatedProduct,
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation, useDeleteProductMutation, useUpdateProductMutation } = productApi;

export default productApi;
