const { MENU_LINKS } = require("../constants/navigation");

exports.getHomeView = (request, response) => {
  response.render("home.ejs", {
    headTitle: "Shop - Home",
    path: "/",
    activeLinkPath: "/",
    menuLinks: MENU_LINKS,
    cartCount: request.session.cart ? request.session.cart.length : 0,
  });
};
