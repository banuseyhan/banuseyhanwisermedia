import {instance} from './service';

export const getUsers = async (skip, limit) => {
  try {
    const url = `users?limit=${limit}&skip=${skip}`;
    const {data} = await instance.get(url);
    if (data) return data;
    return null;
  } catch (e) {
    return null;
  }
};
