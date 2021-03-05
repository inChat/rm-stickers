'use strict'

var test = require('tape')

const stickers = {
  bar: {image: 'bar.png'},
  foo: {image: 'foo.png', title: 'the foo sticker', alt: 'a foo sticker'},
  fun: {image: 'fun.png', alt: 'a fun sticker'},
  sun: {image: 'sun.png', title: 'a sun sticker'}
}

var remark = require('remark')
var rmStickers = require('..')

test('rmStickers', function (t) {
  const shortCodes = Object.keys(stickers).concat(['unseen'])

  shortCodes.forEach(each)

  t.end()

  function each(name) {
    console.log('key', name)

    let ps = remark()
      .use(rmStickers(stickers))
      .processSync(':' + name + ':')

    let resultString = ':' + name + ':\n'

    if (name in stickers) {
      resultString = `![${stickers[name].alt ? stickers[name].alt : ''}](${
        stickers[name].image
      }${stickers[name].title ? ' "' + stickers[name].title + '"' : ''})\n`
    }

    t.equal(
      ps.toString(),
      resultString,
      '`:' + name + ':` > `' + resultString + '`'
    )
  }
})
