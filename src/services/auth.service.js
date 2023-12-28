import db from '../models';

export const register = async () => new Promise((resolve, reject) => {
  try {
    resolve('register service');
    console.log('after resolve');
  } catch (error) {
    reject(error);
  }
})