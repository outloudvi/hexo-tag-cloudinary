const assert = require("assert");
const render = require("../lib/cloudinarytagrender.js").cloudinaryTagRender;
const conf = {
  username: "test",
  subdir: "",
  default_srcset: ""
};

describe("Hexo Cloudinary Image Tag Plugin", function() {
  it("should return empty if nothing is passed", function() {
    assert.equal(render(conf, []), "");
  });

  it("should work in normal cases", function() {
    assert.equal(
      render(conf, ["test.png"]),
      `<p><img src="https://res.cloudinary.com/test/image/upload/test.png" ></p>`
    );
  });

  it("should work with alt and srcset", function() {
    assert.equal(
      render(conf, ["test.png", "alt", "g_auto"]),
      `<p><img src="https://res.cloudinary.com/test/image/upload/g_auto/test.png" alt="alt" ></p>`
    );
  });

  it("should work with alt, srcset and custom class", function() {
    assert.equal(
      render(conf, ["test.png", "alt", "g_auto", "yummy"]),
      `<p><img class="yummy" src="https://res.cloudinary.com/test/image/upload/g_auto/test.png" alt="alt" ></p>`
    );
  });

  it("should throw error with no username present in _config.yml", function() {
    assert.throws(
      () => {
        render({}, ["test.png", "alt", "g_auto", "yummy"]);
      },
      {
        name: "Error",
        message: "A Cloudinary username should be present in _config.yml"
      }
    );
  });

  it("should use the default srcset if not provided", function() {
    assert.equal(
      render(Object.assign(conf, {
          default_srcset: "g_auto"
      }), ["test.png", "alt", "g_auto"]),
      `<p><img src="https://res.cloudinary.com/test/image/upload/g_auto/test.png" alt="alt" ></p>`
    );
  });
});
