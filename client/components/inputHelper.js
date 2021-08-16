export function tagChecker (string) {
  const seperate = string.split('')

  const incorrectClosingTags = []

  const openingTags = seperate.filter((item, index) => {
    return seperate[index - 1] === '<' && item !== '/' && item.match(/[A-Z]/) && seperate[index + 1] === '>'
  })

  seperate.forEach((item, index) => {
    if (item === '<' && seperate[index + 1] === '/' && seperate[index + 2].match(/[A-Z]/) && seperate[index + 3] === '>') {
      if (seperate[index + 2] === openingTags[openingTags.length - 1]) {
        if (incorrectClosingTags.length === 0) {
          openingTags.pop()
        }
      } else {
        if (incorrectClosingTags.length === 0) {
          incorrectClosingTags.push(seperate[index + 2])
        }
      }
    }
  })

  openingTags.unshift('#')
  incorrectClosingTags.unshift('#')

  return openingTags.length === 1 && incorrectClosingTags.length === 1
    ? 'Correctly tagged paragraph'
    : `Expected ${openingTags[openingTags.length - 1]} but found ${incorrectClosingTags[incorrectClosingTags.length - 1]}`
}

export const options = [
  {
    value: 'The following text<C><B>is centred and in boldface</B></C>',
    label: 'The following text<C><B>is centred and in boldface</B></C>'
  },
  {
    value: '<B>This <\\g>is <B>boldface</B> in <<*> a</B> <\\6> <<d>sentence',
    label: '<B>This <\\g>is <B>boldface</B> in <<*> a</B> <\\6> <<d>sentence'
  },
  {
    value: '<B><C> This should be centred and in boldface, but the tags are wrongly nested </B></C>',
    label: '<B><C> This should be centred and in boldface, but the tags are wrongly nested </B></C>'
  },

  {
    value: '<B>This should be in boldface, but there is an extra closing tag</B></C>',
    label: '<B>This should be in boldface, but there is an extra closing tag</B></C>'
  },
  {
    value: '<B><C>This should be centred and in boldface, but there is a missing closing tag</C>',
    label: '<B><C>This should be centred and in boldface, but there is a missing closing tag</C>'
  },
  {
    value: 'Custom input',
    label: 'Custom input'
  }
]
