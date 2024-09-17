import Dashboard from "../views/Dashboard.js";
import Posts from "../views/Posts.js";
import Settings from "../views/Settings.js";
import PageNotFound from "../views/PageNotFound.js";

const routes = {
  "/": Dashboard,
  "/posts": Posts,
  "/settings": Settings,
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const path = location.pathname;
  const View = routes[path] || PageNotFound;

  try {
    const view = new View();
    document.querySelector("#app").innerHTML = await view.getHtml();

  } catch (error) {
    console.error("Error loading view:", error);
    document.querySelector("#app").innerHTML = "<h1>An error occurred</h1>";
  }
};
document.body.addEventListener("click", (event) => {
  const target = event.target.closest("[data-link]");
  if (target) {
    event.preventDefault();
    navigateTo(target);
  }
});

router();
