import db from '../models';

export const getUserList = async () => new Promise((resolve, reject) => {
  try {
    resolve({
      error: 0,
      message: 'User list',
    });
  } catch (error) {
    reject(error);
  }
});