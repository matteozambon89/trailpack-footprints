/* global describe, it */

const assert = require('assert')

describe('FootprintController', () => {
  it('should exist', () => {
    assert(global.app.api.controllers['FootprintController'])
  })
})
