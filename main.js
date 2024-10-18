require('dotenv').config()

console.log('Mi Username es:', process.env.USERNAME)
console.log('Mi Password es:', process.env.PASSWORD)

if(true === true) {
    console.log('----- Success Test -----')
} else {
    throw new Error('FAILED TEST')
}