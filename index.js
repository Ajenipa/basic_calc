const firstnumberDOM = document.getElementById('fn')
const secondnumberDOM = document.getElementById('sn')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const divBtn = document.getElementById('divi')
const mulBtn = document.getElementById('mul')
const calcDOM = document.getElementById('calc')
const resultDOM = document.getElementById('result')

function getOutput(result,desc){
    calcDOM.textContent = desc
    resultDOM.innerHTML = result
}