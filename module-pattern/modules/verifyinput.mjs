export const verifyInput= (num) => {
  if (typeof num !== 'number') {
    throw new Error('Input must be a number');
  }
}