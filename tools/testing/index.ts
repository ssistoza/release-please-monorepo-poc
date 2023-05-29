export const shortTest = 3000;
export const longTest = 10000;

export const setTimer = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done');
    }, ms);
  });
};
