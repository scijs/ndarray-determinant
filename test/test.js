'use strict'

var det = require('../det')

var pack = require('ndarray-pack')
var tape = require('tape')

tape('determinant', function(t) {

  var M = pack([[1,2,3],
                [4,5,6],
                [7,8,9]])

  t.equals(det(M), 0)

  M = pack([[1,2,5],
            [7,10,-1],
            [-4, 3, 2]])

  t.equals(det(M), 308)

  t.end()
})