import { axiosInstanse } from "./axiosIns";

export const getAllFoodsRequest = () => {
  return axiosInstanse.get("/foods");
};
export const getAllBasketRequest = () => {
  return axiosInstanse.get("/basket");
};

export const postBasketRequest = (payload) => {
  return axiosInstanse.post(`/foods/${payload.id}/addToBasket`, {
    amount: payload.amount,
  });
};

export const plusBasketRequest = (payload) => {
  return axiosInstanse.put(`/basketItem/${payload.id}/update`, {
    amount: payload.amount + 1,
  });
};

export const minusBasketRequest = (payload) => {
  return axiosInstanse.put(`/basketItem/${payload.id}/update`, {
    amount: payload.amount,
  });
};

export const deleteBasketRequest = (id) => {
  return axiosInstanse.delete(`/basketItem/${id.id}/delete`);
};
