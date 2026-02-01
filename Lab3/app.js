const count = document.getElementById("count");
const input = document.getElementById("text");

input.addEventListener("keyup", () => {
  count.innerHTML = input.value.length;
});
