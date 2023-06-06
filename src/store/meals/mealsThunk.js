import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRequest } from "../../lib/fetchAPI";
import { getAllFoodsRequest } from "../axios/axios";

export const getFoods = createAsyncThunk(
  "foods/getMeals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllFoodsRequest();
      return response.data.data
    } catch (error) {
      return rejectWithValue(
        error?.response?.message || `Something went wrong!`
      );
    }
  }
);
