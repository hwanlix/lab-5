const { LOGOUT_LINKS } = require("../constants/navigation");
const logger = require("../utils/logger");

exports.getLogoutView = (request, response) => {
  response.render("logout.ejs", {
    headTitle: "Shop - Logout",
    path: "/logout",
    activeLinkPath: "/logout",
    menuLinks: LOGOUT_LINKS,
    cartCount: request.session.cart ? request.session.cart.length : 0,
  });
};

exports.killApplication = (request, response) => {
  logger.getProcessLog();
  process.exit();
};
