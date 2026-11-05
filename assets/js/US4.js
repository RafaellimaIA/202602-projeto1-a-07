document.addEventListener("DOMContentLoaded", () => {
  let currentStep = 1;

  const screens = {
    1: document.getElementById("step1"),
    2: document.getElementById("step2"),
    3: document.getElementById("step3")
  };

  const progressBar = document.getElementById("progressBar");
  const progressBarContainer = document.getElementById("progressBarContainer");
  const stepIndicator = document.getElementById("stepIndicator");
  const btnBack = document.getElementById("btnBack");

  function goToStep(step) {
    currentStep = step;

    // Alterna a exibição das telas
    Object.keys(screens).forEach((key) => {
      screens[key].classList.remove("active");
    });
    screens[step].classList.add("active");

    // Ajusta a barra de progresso, botão de voltar e contador de passos
    if (step === 1) {
      progressBarContainer.style.display = "block";
      progressBar.style.width = "66.6%";
      stepIndicator.style.display = "inline";
      stepIndicator.textContent = "2/3";
      btnBack.style.display = "flex";
    } else if (step === 2) {
      progressBarContainer.style.display = "block";
      progressBar.style.width = "100%";
      stepIndicator.style.display = "inline";
      stepIndicator.textContent = "3/3";
      btnBack.style.display = "flex";
    } else if (step === 3) {
      progressBarContainer.style.display = "none";
      stepIndicator.style.display = "none";
      btnBack.style.display = "flex"; // Mantém a seta visível na etapa final
    }

    window.scrollTo(0, 0);
  }

  // Ação de Voltar
  if (btnBack) {
    btnBack.addEventListener("click", () => {
      if (currentStep === 3) {
        goToStep(2); // Volta da etapa 3 para a etapa 2
      } else if (currentStep === 2) {
        goToStep(1); // Volta da etapa 2 para a etapa 1
      } else if (currentStep === 1) {
        window.location.href = "US3T1.html"; // Retorna ao cadastro
      }
    });
  }

// Validação do Upload e Avanço da Tela 1
  const fileUpload = document.getElementById("fileUpload");
  const fileNamePreview = document.getElementById("fileNamePreview");
  const btnNext1 = document.getElementById("btnNext1");

  if (fileUpload && fileNamePreview && btnNext1) {
    fileUpload.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        fileNamePreview.textContent = `Arquivo: ${file.name}`;
        btnNext1.disabled = false; // Desbloqueia o botão ao escolher um arquivo
      } else {
        fileNamePreview.textContent = "";
        btnNext1.disabled = true; // Bloqueia se cancelar a escolha
      }
    });

    btnNext1.addEventListener("click", () => {
      if (!btnNext1.disabled) {
        goToStep(2);
      }
    });
  }

  // Checkbox de Termos (Tela 2)
  const termsCheck = document.getElementById("termsCheck");
  const btnContract = document.getElementById("btnContract");
  if (termsCheck && btnContract) {
    termsCheck.addEventListener("change", (e) => {
      btnContract.disabled = !e.target.checked;
    });

    btnContract.addEventListener("click", () => {
      goToStep(3);
    });
  }

  // Botão da Tela Final
  const btnTrack = document.getElementById("btnTrack");
  if (btnTrack) {
    btnTrack.addEventListener("click", () => {
      window.location.href = "US5.html";
    });
  }
});
