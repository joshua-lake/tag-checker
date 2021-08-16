export function tagChecker (string) {
  const seperate = string.split('')
  const openingTags = []
  const incorrectClosingTags = []
  seperate.forEach((item, index) => {
    if (item === '<' && seperate[index + 1] !== '/' && seperate[index + 1] === seperate[index + 1].toUpperCase()) {
      openingTags.push(seperate[index + 1])
    }
  })

  const pureOpeningTags = openingTags.filter(item => !item.match(/[^A-Z]/))

  seperate.forEach((item, index) => {
    if (item === '<' && seperate[index + 1] === '/' && seperate[index + 2] === seperate[index + 2].toUpperCase()) {
      if (seperate[index + 2] === pureOpeningTags[pureOpeningTags.length - 1]) {
        if (incorrectClosingTags.length === 0) {
          pureOpeningTags.pop()
        }
      } else {
        incorrectClosingTags.push(seperate[index + 2])
      }
    }
  })

  const pureIncorrectClosingTags = incorrectClosingTags.filter(item => !item.match(/[^A-Z]/))

  pureOpeningTags.unshift('#')
  pureIncorrectClosingTags.unshift('#')

  return pureOpeningTags.length === 1 && pureIncorrectClosingTags.length === 1
    ? 'Correctly tagged paragraph'
    : `Expected ${pureOpeningTags[pureOpeningTags.length - 1]} but found ${pureIncorrectClosingTags[pureIncorrectClosingTags.length - 1]}`
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
