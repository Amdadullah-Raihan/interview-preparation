document.addEventListener("click", (e) => {
  const circleDetails = [];

  const x = e.clientX;
  const y = e.clientY;
  circleDetails.push({ x, y });

  console.log("1", circleDetails[1]);
  // console.log("x-co-ordinates: ", e.clientX, "y-co-ordinate: ", e.clientY);

  const circle = document.createElement("div");

  const radius = Math.random() * (100 - 50) + 50;

  circle.classList.add("circle");
  circle.style.width = radius * 2 + "px";
  circle.style.height = radius * 2 + "px";
  circle.style.marginLeft = x - radius + "px";
  circle.style.marginTop = y - radius + "px";
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
