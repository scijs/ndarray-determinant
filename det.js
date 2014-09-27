'use strict'

var crout   = require('ndarray-crout-decomposition')
var scratch = require('ndarray-scratch')
var ops     = require('ndarray-ops')
var diag    = require('ndarray-diagonal')

module.exports = determinant

function determinant(M) {
  if(M.dimension !== 2 || M.shape[0] !== M.shape[1]) {
    throw new Error('ndarray-determinant: Matrix must be square')
  }
  var LU = scratch.zeros(M.shape)
  crout(M, LU, LU)
  var result = ops.prod(diag(LU))
  scratch.free(LU)
  return result
}