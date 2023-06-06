import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRequest } from "../../lib/fetchAPI";
import {
  deleteBasketRequest,
  getAllBasketRequest,
  minusBasketRequest,
  plusBasketRequest,
  postBasketRequest,
} from "../axios/axios";

export const getBasket = createAsyncThunk(
  "basket/getBasket",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllBasketRequest();
      return response.data.data.items;
    } catch (error) {
      return rejectWithValue(
        error?.response?.message || "Something went wrong!"
      );
    }
  }
);

export const addItem = createAsyncThunk(
  "basket/addItem",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      await postBasketRequest(payload);
      return dispatch(getBasket());
    } catch (error) {
      rejectWithValue(error?.response?.message || "Something went wrong!");
    }
  }
);

// export const incrementFood = (id, amount) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetchRequest(`/basketItem/${id}/update`, {
//         method: "PUT",
//         body: { amount: amount + 1 },
//       });

//       dispatch(getBasket());

//       return await response.items;
//     } catch (error) {
//       new Error(error);
//     }
//   };
// };

export const incrementFood = createAsyncThunk(
  "basket/increment",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      await plusBasketRequest(payload);

      return dispatch(getBasket());
    } catch (error) {
      rejectWithValue(error?.response?.message || "Something went wrong!");
    }
  }
);

// export const decrementFood = (id, amount) => {
//   return async (dispatch) => {
//     if (amount !== 0) {
//       try {
//         const response = await fetchRequest(`/basketItem/${id}/update`, {
//           method: "PUT",
//           body: { amount: amount },
//         });

//         dispatch(getBasket());

//         return await response.items;
//       } catch (error) {
//         new Error(error);
//       }
//     } else {
//       try {
//         const response = await fetchRequest(`/basketItem/${id}/delete`, {
//           method: "DELETE",
//         });

//         dispatch(getBasket());

//         return await response.items;
//       } catch (error) {
//         new Error(error);
//       }
//     }
//   };
// };
export const decrementFood = createAsyncThunk(
  "basket/decrement",
  async (payload, { rejectWithValue, dispatch }) => {
    if (payload.amount !== 0) {
      try {
        await minusBasketRequest(payload);
        return dispatch(getBasket());
      } catch (error) {
        rejectWithValue(error?.response?.message || "Something went wrong!");
      }
    } else {
      try {
        await deleteBasketRequest(payload);
        return dispatch(getBasket());
      } catch (error) {
        rejectWithValue(error?.response?.message || "Something went wrong!");
      }
    }
  }
);
