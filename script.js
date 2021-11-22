const box = document.querySelector("#circle");

const offset = {
  x: null,
  y: null
};

const getPosition = (e) => {
  const pageX =
    e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
  const pageY =
    e.clientY + document.body.scrollTop + document.documentElement.scrollTop;

  return {
    pageX,
    pageY
  };
};

const mousemoveHandler = (e) => {
  const { pageX, pageY } = getPosition(e);
  circle.style.left = pageX - offset.x + "px";
  circle.style.top = pageY - offset.y + "px";
};

const mousedownHandler = (e) => {
  const { pageX, pageY } = getPosition(e);
  const { x, y } = circle.getBoundingClientRect();
  const leftOffset = pageX - x;
  const topOffset = pageY - y;
  offset.x = leftOffset;
  offset.y = topOffset;
  window.addEventListener("mousemove", mousemoveHandler);
  circle.classList.add("active");
};

const mouseupListener = async () => {
  window.removeEventListener("mousemove", mousemoveHandler);
  circle.classList.remove("active");
  offset.x = null;
  offset.y = null;
};

circle.addEventListener("mousedown", mousedownHandler);
window.addEventListener("mouseup", mouseupListener);
