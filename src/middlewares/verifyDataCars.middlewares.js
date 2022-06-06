const verifyDataCarsMiddleware = (req, res, next) => {
  const { name, color, brand, price, category, img } = req.body;

  if (!name || !color || !brand || !price || !category || !img) {
    return res.status(422).send("Dados imcompletos");
  }
  next();
};

export default verifyDataCarsMiddleware;
