document.addEventListener("click", (e) => {
  let circleDetails = [];

  let x = e.clientX;
  let y = e.clientY;

  // console.log("x-co-ordinates: ", e.clientX, "y-co-ordinate: ", e.clientY);

  const circle = document.createElement("div");

  circle.classList.add("circle");
  circle.style.marginLeft = x - 50 + "px";
  circle.style.marginTop = y - 50 + "px";
  //   circle.style.width = "100px";
  //   circle.style.height = "100px";
  //   circle.style.borderRadius = "50%";
  //   circle.style.border = "2px solid slateblue";
  document.body.appendChild(circle);
  circleDetails.push({ x: x, y: y });
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
