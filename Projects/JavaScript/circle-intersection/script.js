document.addEventListener("click", (e) => {
  let circleDetails = [];

  let x = e.clientX;
  let y = e.clientY;
  circleDetails.push({ x, y });
  // console.log("x-co-ordinates: ", e.clientX, "y-co-ordinate: ", e.clientY);

  const circle = document.createElement("div");

  circle.classList.add("circle");
  circle.style.marginLeft = x - 55 + "px";
  circle.style.marginTop = y - 55 + "px";
  document.body.appendChild(circle);

  console.log(circleDetails);

  const circles = document.querySelectorAll(".circle");

  // console.log(circles);

  if (circles.length > 2) {
    circles.forEach((circle, idx) => {
      if (idx < 2) {
        circle.remove();
      }
    });
  }

  const centerDistance = x;
});
