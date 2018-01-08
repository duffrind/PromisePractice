var Promise = require('promise')

function prac () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('hi')
    }, 500)
  })
}

prac().then(function (fulfilled) {
  console.log(fulfilled)
})
.catch(function (error) {
  console.log(error.message)
})
