var swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 2,
      spaceBetween: 18,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1188: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },
});

const campo = document.getElementById("campoBusca");
const resultado = document.getElementById("resultadoBusca");

let timeoutId;

function fazerBusca() {
  const valorBusca = campo.value.trim();

  clearTimeout(timeoutId); 

  if (valorBusca) {
    resultado.textContent = `Você buscou por: '${valorBusca}'`;
  } else {
    resultado.textContent = "Por favor, digite algo para buscar.";

    
    timeoutId = setTimeout(() => {
      resultado.textContent = "";
    }, 4000);
  }
}

campo.addEventListener("input", () => {
  if (campo.value.trim() === "") {
    resultado.textContent = "";
    clearTimeout(timeoutId);
  }
});