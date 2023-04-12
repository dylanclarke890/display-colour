document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input") as HTMLInputElement;
  const display = document.querySelector("div#colour-display") as HTMLDivElement;
  document.body.addEventListener("click", () => input.focus());
  input.addEventListener("keyup", () => {
    let val = input.value;
    if (!val.startsWith("#") && !val.startsWith("rgb")) val = `#${val}`;
    display.style.backgroundColor = val;
  })
  input.addEventListener("paste", () => {
    input.value = "";
  });
})