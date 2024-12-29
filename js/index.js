document.addEventListener("DOMContentLoaded", () => {
  /* Light the correct number of candles */
  const hanukkahStart = new Date("2024-12-25");
  const today = new Date();
  const dayOfHanukkah =
    Math.floor((today - hanukkahStart) / (1000 * 60 * 60 * 24)) + 1;

  function lightCandles(day) {
    console.log("day: ", day);
    for (let i = 0; i <= 8; i++) {
      const flame = document.querySelector(`#flame-${i}`);
      console.log(flame);
      if (flame) {
        if (i <= day) {
          flame.setAttribute("visibility", "visible");
        } else {
          flame.setAttribute("visibility", "hidden");
        }
      }
    }
  }

  if (dayOfHanukkah >= 1 && dayOfHanukkah <= 8) {
    lightCandles(dayOfHanukkah);
  }

  /* Randomize the flame movements */
  document.querySelectorAll(".flame animateTransform").forEach((anim) => {
    const randomRotation = Math.random() * 8 - 4; // Random between -3 and 3
    anim.setAttribute(
      "values",
      `${randomRotation} 15 35; -${randomRotation} 15 35; ${randomRotation} 15 35`
    );
  });
});
