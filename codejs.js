document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll(".butH");

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const targetId = botao.getAttribute("data-target"); 
      const conteudo = document.getElementById(targetId); 

      if (conteudo) {
        const displayAtual = window.getComputedStyle(conteudo).display;

        // se ainda não salvei o display original, salvo agora
        if (!conteudo.dataset.originalDisplay) {
          conteudo.dataset.originalDisplay = displayAtual === "none" ? "block" : displayAtual;
        }

        if (displayAtual === "none") {
          // volta ao display original
          conteudo.style.display = conteudo.dataset.originalDisplay;
        } else {
          // esconde
          conteudo.style.display = "none";
        }
      }
    });
  });
});