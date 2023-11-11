const articles = document.querySelectorAll(".surgir");

function aparecerArticle() {
  let alto = window.innerHeight * 0.7;
  articles.forEach((item) => {
    let topo = item.getBoundingClientRect().top - alto < 0;
    console.log(topo);
    if (topo) item.classList.add("ativo");
  });
}

window.addEventListener("scroll", aparecerArticle);
