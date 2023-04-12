document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#colour") as HTMLInputElement;
  const colorPicker = document.querySelector("#colour-picker") as HTMLInputElement;
  const display = document.querySelector("div#colour-display") as HTMLDivElement;
  document.body.addEventListener("click", () => input.focus());
  input.addEventListener("keyup", () => {
    let val = input.value;
    if (!val.startsWith("#") && !val.startsWith("rgb")) {
      val = `#${val}`;
      input.value = val;
    }
    display.style.backgroundColor = val;
    colorPicker.value = input.value;
  });
  input.addEventListener("paste", () => {
    input.value = "";
  });
  colorPicker.addEventListener("change", () => {
    input.value = colorPicker.value;
    input.dispatchEvent(new Event("keyup"));
  });
  input.focus();
});
