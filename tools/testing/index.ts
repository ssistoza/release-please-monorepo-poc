export const shortTest = 1000;
export const longTest = 2000;

export const setTimer = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done');
    }, ms);
  });
};
