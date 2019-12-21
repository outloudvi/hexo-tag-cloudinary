const path = require("path");

// {% cloudinary src false|sizes [alt] [class] %}
function cloudinaryTagRender(conf, args) {
  if (!args[0]) {
    return "";
  }

  if (!conf.username) {
    throw Error("A Cloudinary username should be present in _config.yml");
  }

  const imgFileName = args[0];
  const imgAlt = args[1] || "";
  const imgSrcset = args[2] || "";
  const imgClass = args[3] || "";

  const imgURL = path.join(
    `https://res.cloudinary.com/${conf.username}/image/upload`,
    imgSrcset || conf.default_srcset,
    conf.subdir,
    imgFileName
  );

  return [
    "<p><img",
    imgClass ? `class="${imgClass}"` : "",
    `src="${imgURL}"`,
    imgAlt ? `alt="${imgAlt}"` : "",
    "></p>"
  ]
    .filter(x => x !== "")
    .join(" ");
}

if (typeof module !== "undefined" && module.exports != null) {
  exports.cloudinaryTagRender = cloudinaryTagRender;
}
