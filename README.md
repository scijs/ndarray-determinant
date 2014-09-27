ndarray-determinant
===================
Computes the determinant of a matrix (encoded as an ndarray)

# Example

```javascript
var pack = require('ndarray-pack')
var det  = require('ndarray-determinant')

var M = pack([[1,2,3],
              [4,5,6],
              [7,8,9]])

console.log(det(M))
```

Output:

```
0
```

# Install

```
npm install ndarray-determinant
```

# API

### `require('ndarray-determinant')(M)`
Computes the determinant of the square matrix `M`

* `M` is a square 2D ndarray

**Returns** The determinant of `M`

# Credits
(c) 2014 Mikola Lysenko. MIT License