function calculateDayOfHanukkah() {
  const hanukkahStart = new Date(2024, 11, 25);
  const hanukkahEnd = new Date(hanukkahStart);
  hanukkahEnd.setDate(hanukkahEnd.getDate() + 8);

  const today = new Date();
  const todayFloored = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  console.log({ todayFloored });

  const daysDifference = Math.floor(
    (todayFloored.getTime() - hanukkahStart.getTime()) / (1000 * 60 * 60 * 24) +
      1
  );
  console.log(daysDifference);

  return todayFloored >= hanukkahStart && todayFloored < hanukkahEnd
    ? daysDifference
    : 0;
}

function lightCandles(day) {
  for (let i = 0; i <= 8; i++) {
    if (i > day) {
      return;
    }

    const flame = document.querySelector(`#flame-${i}`);
    if (flame) {
      flame.setAttribute("visibility", "visible");
    }
  }
}

function randomizeFlameMovements() {
  document.querySelectorAll(".flame animateTransform").forEach((anim) => {
    const randomRotation = Math.random() * 12 - 6;
    anim.setAttribute(
      "values",
      `${randomRotation} 15 35; -${randomRotation} 15 35; ${randomRotation} 15 35`
    );
  });
}
function genRandomBeginFlameTimes() {
  document.querySelectorAll(".flame animate").forEach((animate, index) => {
    animate.setAttribute("begin", `${Math.random() * 5}s`);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const dayOfHanukkah = calculateDayOfHanukkah();
  lightCandles(dayOfHanukkah);
  randomizeFlameMovements();
  // genRandomBeginFlameTimes();
});
