export const checkIsItemInCart = (id, cart) => {
  const _item = cart.find((cartItem) => cartItem.id === id);

  if (_item) return true;
  else return false;
};

export const getRandomPrice = () => {
  return Math.floor(Math.random() * (300 - 50) + 50);
};
