const siteViews = {
  inicio: document.querySelector("#homeView"),
  playlist: document.querySelector("#playlistView"),
  recuerdos: document.querySelector("#memoriesView"),
  poemario: document.querySelector("#poemsView")
};

function getRoute() {
  const route = window.location.hash.replace("#", "");
  return siteViews[route] ? route : "inicio";
}

function showRoute(route) {
  Object.entries(siteViews).forEach(([name, view]) => {
    view.hidden = name !== route;
  });

  document.body.classList.toggle("home-page", route === "inicio");
  window.scrollTo({ top: 0, behavior: "auto" });
}

window.addEventListener("hashchange", () => showRoute(getRoute()));
showRoute(getRoute());
