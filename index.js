'use strict'

const visit = require('unist-util-visit-parents')

module.exports = rmStickers

var own = {}.hasOwnProperty

let stickers = {}

function rmStickers(stickersObject) {
  stickers = stickersObject
  const transformWrapper = () => {
    return transform
  }

  return transformWrapper
}

function transform(tree) {
  visit(tree, 'text', ontext)
}

function ontext(node, parents) {
  let value = node.value
  let match
  let length = parents.length
  const find = /^:(\+1|[-\w]+):$/g // Line starts and ends with `:`
  const siblings = parents[length - 1].children

  match = find.exec(value)

  if (match && own.call(stickers, match[1])) {
    siblings[siblings.indexOf(node)] = {
      type: 'image',
      url: stickers[match[1]].image,
      title: stickers[match[1]].title || null,
      alt: stickers[match[1]].alt || null,
      position: node.position
    }
  }
}
