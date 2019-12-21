hexo-tag-cloudinary [![NPM version][npm-image]][npm-url]
================

**`{% cloudinary about.png alttext %}`**

[![](https://nodei.co/npm/hexo-tag-cloudinary.png?global=true)](https://nodei.co/npm/hexo-tag-cloudinary)

Based on [hexo-cloudinary](https://github.com/maliMirkec/hexo-cloudinary) by maliMirkec.

## Install

Install using [npm][npm-url].

```
npm install hexo-tag-cloudinary --save
```

or if you are using GitHub Packages:

```
npm install @outloudvi/hexo-tag-cloudinary --save
```

Install using [yarn][yarn-url].

```
yarn add hexo-tag-cloudinary
```

## Usage

```
{% cloudinary src [alt] [srcset] [class] %}
```

where:
- src - path to image
- alt - image title (optional)
- srcset - srcset sizes in following format
  - small_width=small_cloudinary_transformation_id;big_width=big_cloudinary_transformation_id
  - (empty) - no srcset
- class - custom class (optional)

## Configurations

In `_config.yml:`

``` yaml
cloudinary:
    username: "your_user_name"   # Cloudinary username
    subdir: "myhexoblogimage"    # sub directory for your images
    default_srcset: ""           # srcset by default
```

## Example

``` nunjucks
{% cloudinary "about.png" "My image title" "w_300,h_600,c_thumb,g_auto" "ui image" %}
```

``` html
<p><img class="ui image" src="https:/res.cloudinary.com/USER_NAME/image/upload/w_300,h_600,c_thumb,g_auto/ASSET_DIR/about.png" alt="My image title" ></p>
```

## License
MIT

[homepage]: https://github.com/outloudvi/hexo-tag-cloudinary
[hexo-cloudinary-link]: https://github.com/outloudvi/hexo-tag-cloudinary

[srcset]: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images

[npm-url]: https://npmjs.org/package/hexo-tag-cloudinary
[npm-image]: http://img.shields.io/npm/v/hexo-tag-cloudinary.svg?style=flat
[npm-downloads]: http://img.shields.io/npm/dm/hexo-tag-cloudinary.svg?style=flat

[yarn-url]: https://yarnpkg.com/en/package/hexo-tag-cloudinary

[Hexo]: http://hexo.io/
[Cloudinary]: http://cloudinary.com/
