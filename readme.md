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
var vfile = require('to-vfile')
var report = require('vfile-reporter')
var unified = require('unified')
var parse = require('remark-parse')
var stickers = require('rm-stickers')
var stringify = require('remark-stringify')

unified()
  .use(parse)
  .use(stickers)
  .use(stringify)
  .process(vfile.readSync('example.md'), function (err, file) {
    console.error(report(err || file))
    console.log(String(file))
  })
```

Now, running `node example` yields:

```text
example.md: no issues found
```

```markdown
Thumbs up: 👍
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
