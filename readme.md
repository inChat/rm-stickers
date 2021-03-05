# rm-stickers

A remark plugin to turn emoji shortcodes (`:my-custom-image:`) into
custom defined images.

Based on [remark-gemoji](https://github.com/remarkjs/remark-gemoji)
and [remark-embed-images](https://github.com/remarkjs/remark-embed-images).

## Use

Say we have the following file, `example.md`:

```markdown
Thumbs up: :thumbs-up:
```

And our script, `example.js`, looks as follows:

```js
let remark = require('remark')
let rmStickers = require('rm-stickers')

const stickers = {
  bar: {image: 'bar.png'},
  foo: {image: 'foo.png', title: 'the foo sticker', alt: 'a foo sticker'},
  fun: {image: 'fun.png', alt: 'a fun sticker'},
  sun: {image: 'sun.png', title: 'a sun sticker'}
}

remark().use(rmStickers(stickers)).processSync(':foo:').toString()

// result
// ![a foo sticker](foo.png "the foo sticker")
```

## Security

Use of `rm-stickers` does not involve \[**rehype**]\[rehype]
(\[**hast**]\[hast]) or user content so there are no openings for
\[cross-site scripting (XSS)]\[xss] attacks.

## Related

*   [`remark-gemoji`](https://github.com/remarkjs/remark-gemoji)
    — GitHub Flavored Markdown
*   [`remark-gfm`](https://github.com/remarkjs/remark-gfm)
    — GitHub Flavored Markdown
*   [`remark-github`](https://github.com/remarkjs/remark-github)
    — Auto-link references like in GitHub issues, PRs, and comments
*   [`remark-footnotes`](https://github.com/remarkjs/remark-footnotes)
    — Footnotes
*   [`remark-frontmatter`](https://github.com/remarkjs/remark-frontmatter)
    — Frontmatter (YAML, TOML, and more) support
*   [`remark-math`](https://github.com/remarkjs/remark-math)
    — Math

## License

\[MIT]\[license] © \[Rory Gianni]\[author]
