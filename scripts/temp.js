let btnControl = document.querySelectorAll(".control"); // Botões de controle
let div = document.querySelectorAll(".content"); // Divs que serão exibidas ou ocultadas

btnControl.forEach((btn, i) => {
    // Para cada botão de controle, adicione um eventListener
    btn.addEventListener("click", () => {
        let currentState = div[i].classList.contains('hidden') ? 0 : 1; // Verifica se a div está oculta

        if (currentState === 0) {
            // Se a div estiver oculta, mostra ela
            div[i].classList.remove("hidden");
            div[i].classList.add("content");
            btn.textContent = "Exibir Menos"; // Troca o texto do botão
        } else {
            // Se a div estiver visível, oculta ela
            div[i].classList.remove("content");
            div[i].classList.add("hidden");
            btn.textContent = "Exibir Mais"; // Troca o texto do botão
        }
    });
});
