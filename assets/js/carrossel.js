const slidesTrack = document.getElementById("slides");
const slides = Array.from(document.querySelectorAll(".slide"));
const dots = Array.from(document.querySelectorAll(".dot"));

const nextButton = document.getElementById("nextButton");
const skipButton = document.getElementById("skipButton");
const backButton = document.getElementById("backButton");
const swipeHint = document.getElementById("swipeHint");

let currentSlide = 0;

const lastSlide = slides.length - 1;

function showSlide(index) {

    currentSlide = Math.max(0, Math.min(index, lastSlide));

    slidesTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    slides.forEach((slide, i) => {

        const active = i === currentSlide;

        slide.classList.toggle("is-active", active);

        slide.setAttribute("aria-hidden", String(!active));

    });

    dots.forEach((dot, i) => {

        const active = i === currentSlide;

        dot.classList.toggle("is-active", active);

        if (active) {
            dot.setAttribute("aria-current", "step");
        } else {
            dot.removeAttribute("aria-current");
        }

    });

    backButton.hidden = currentSlide === 0;

    nextButton.textContent =
        currentSlide === lastSlide
            ? "Criar minha conta"
            : "Continuar";

    skipButton.hidden = currentSlide === lastSlide;

    swipeHint.textContent =
        currentSlide === lastSlide
            ? ""
            : "Deslize para continuar";

}

function goToLastSlide() {

    showSlide(lastSlide);

}

// Botão Continuar

nextButton.addEventListener("click", () => {

    if (currentSlide < lastSlide) {

        showSlide(currentSlide + 1);

    } else {

        // Aqui poderá ser adicionada a navegação
        // para a tela de cadastro do aplicativo.

        alert("Fim da apresentação! Aqui você pode direcionar para a tela de cadastro.");

    }

});

// Botão Pular

skipButton.addEventListener("click", goToLastSlide);

// Botão Voltar

backButton.addEventListener("click", () => {

    showSlide(currentSlide - 1);

});

// Indicadores inferiores

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

    });

});

// Navegação pelas setas do teclado

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {

        showSlide(currentSlide + 1);

    }

    if (event.key === "ArrowLeft") {

        showSlide(currentSlide - 1);

    }

});

// Permite avançar e voltar arrastando o dedo na tela do celular.

let touchStartX = 0;

const carousel = document.querySelector(".carousel");

carousel.addEventListener("touchstart", (event) => {

    touchStartX = event.changedTouches[0].screenX;

}, { passive: true });

carousel.addEventListener("touchend", (event) => {

    const touchEndX = event.changedTouches[0].screenX;

    const distance = touchEndX - touchStartX;

    if (Math.abs(distance) > 45) {

        showSlide(
            distance < 0
                ? currentSlide + 1
                : currentSlide - 1
        );

    }

}, { passive: true });

// Inicia o carrossel na primeira tela.

showSlide(0);