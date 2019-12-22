"use strict";

var cloudinaryTagRenderer = require("./lib/cloudinarytagrender.js");

const conf = Object.assign(
  {
    username: "",
    subdir: "",
    default_srcset: ""
  },
  hexo.config.cloudinary || {}
);

hexo.extend.tag.register("cloudinary", (args) =>
  cloudinaryTagRenderer.cloudinaryTagRender(conf, args)
);
