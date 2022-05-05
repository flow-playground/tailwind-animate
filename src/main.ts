import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = /* HTML */ `<div class="container mx-auto">
  <h1 class="">Animate</h1>
</div>`;

document.querySelector("#button")?.addEventListener("click", function () {
  const target = document.querySelector("#target");
  if (!target) return;
  if (target.classList.contains("hidden")) {
    target.classList.add("ease-out");
    target.classList.remove("hidden");
    target.animate(
      [
        { opacity: 0, transform: "scale(.85)" },
        { opacity: 1, transform: "scale(1)" },
      ],
      {
        easing: "ease-out",
        duration: 200,
      }
    );
  } else {
    const duration = 100;
    target.animate(
      [
        { opacity: 1, transform: "scale(1)" },
        { opacity: 0, transform: "scale(.85)" },
      ],
      {
        duration: duration,
        easing: "ease-in",
      }
    );
    setTimeout(() => {
      target.classList.add("hidden");
    }, duration);
  }
});
