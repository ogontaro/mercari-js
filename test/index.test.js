import Mercari from '../src/index'

test('search("a") to be "a"', () => {
  const mercari = new Mercari()
  expect(mercari.search('a')).toBe('a')
})
