document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".flame animateTransform").forEach((anim) => {
    const randomRotation = Math.random() * 6 - 3; // Random between -3 and 3
    anim.setAttribute(
      "values",
      `${randomRotation} 15 35; -${randomRotation} 15 35; ${randomRotation} 15 35`
    );
  });
});
