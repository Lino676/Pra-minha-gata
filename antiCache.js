const versao = Date.now();

// Atualiza o CSS
const css = document.createElement("link");
css.rel = "stylesheet";
css.href = "style.css?v=" + versao;
document.head.appendChild(css);