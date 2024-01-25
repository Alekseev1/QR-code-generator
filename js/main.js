const form = document.querySelector("#form");
const input = document.querySelector("#url");
const qrImgWrapper = document.querySelector("#card-qr");
const api = "https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  qrImgWrapper.innerHTML = " ";

  const request = api + input.value;

  const img = `<img src="${request}" alt="QR code">`;
  qrImgWrapper.classList.add("open");
  qrImgWrapper.insertAdjacentHTML("beforeend", img);
});
