const circleArea = (r) => {
  if (Number(r))
    console.log("Area of the circle: A = ", Math.PI * Math.pow(r, 2));
};

const circleCircumference = (r) => {
  if (Number(r))
    console.log("Circumference of the circle: C = ", 2 * Math.PI * r);
};
module.exports = {
  circleArea,
  circleCircumference,
};
