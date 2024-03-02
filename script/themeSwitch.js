let toggle = false;

document.getElementById("theme").addEventListener("click", () => {
  toggle = !toggle;

  document.getElementById("moon").style.visibility = toggle
    ? "hidden"
    : "visible";
  document.getElementById("sun").style.visibility = toggle
    ? "visible"
    : "hidden";

  document.querySelector("body").style.backgroundColor = toggle
    ? "var(--Very-Dark-Blue)"
    : "var(--Very-Light-Grayish-Blue)";

  document.getElementById("desktop-bg-img").srcset = toggle
    ? "images/bg-desktop-dark.jpg"
    : "images/bg-desktop-light.jpg";
  document.getElementById("mobile-bg-img").srcset = toggle
    ? "images/bg-mobile-dark.jpg"
    : "images/bg-mobile-light.jpg";

  document.getElementById("inputBox").style.backgroundColor = toggle
    ? "var(--Very-Dark-Desaturated-Blue)"
    : "var(--Very-Light-Gray)";

  document.getElementById("circle").style.borderColor = toggle
    ? "var(--Very-Dark-Grayish-Blue)"
    : "var(--Light-Grayish-Blue)";

  document.getElementById("container-body").style.backgroundColor = toggle
    ? "var(--Very-Dark-Desaturated-Blue)"
    : "var(--Very-Light-Gray)";

  document.getElementById("container-body").style.color = toggle
    ? "var(--Light-Grayish-Blue)"
    : "var(--Very-Dark-Grayish-Blue)";

  document.querySelectorAll(".input-check").forEach((element) => {
    element.style.borderColor = toggle
      ? "var(--Very-Dark-Grayish-Blue)"
      : "var(--Light-Grayish-Blue)";
  });

  document.querySelectorAll(".check").forEach((element) => {
    element.style.borderColor = toggle
      ? "var(--Very-Dark-Grayish-Blue)"
      : "var(--Light-Grayish-Blue)";
  });
});
