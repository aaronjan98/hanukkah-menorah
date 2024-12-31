function calculateDayOfHanukkah() {
  const hanukkahStart = new Date(Date.UTC(2024, 11, 25));
  const hanukkahStartPST = convertToPST(hanukkahStart);
  const hanukkahEnd = new Date(hanukkahStartPST);
  hanukkahEnd.setDate(hanukkahEnd.getDate() + 8);

  const today = new Date();
  const flooredDate = new Date(
    Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())
  );
  const flooredDatePST = convertToPST(flooredDate);

  const daysDifference = Math.floor(
    (flooredDatePST.getTime() - hanukkahStartPST.getTime()) /
      (1000 * 60 * 60 * 24) +
      1
  );

  return flooredDatePST >= hanukkahStartPST && flooredDatePST < hanukkahEnd
    ? daysDifference
    : 0;
}

function convertToPST(date) {
  return new Date(date.getTime() - 8 * 60 * 60 * 1000);
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
