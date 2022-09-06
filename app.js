let result = 0
function getDesc(firstnumber,operator,secondnumber){
    let desc = `CALCULATION: ${firstnumber} ${operator} ${secondnumber}`
    return desc
}
function add(){
    let result  = ` RESULT: ${Number(firstnumberDOM.value) + Number(secondnumberDOM.value)}`
    //let desc = `CALCULATION: ${firstnumberDOM.value} + ${secondnumberDOM.value}`
    let desc = getDesc(firstnumberDOM.value,"+",secondnumberDOM.value)
    getOutput(result,desc)
}
function sub(){
    let result  = ` RESULT: ${Number(firstnumberDOM.value) - Number(secondnumberDOM.value)}`
    //let desc = `CALCULATION: ${firstnumberDOM.value} + ${secondnumberDOM.value}`
    let desc = getDesc(firstnumberDOM.value,"-",secondnumberDOM.value)
    getOutput(result,desc)
}
function divi(){
    let result  = ` RESULT: ${Number(firstnumberDOM.value) / Number(secondnumberDOM.value)}`
    //let desc = `CALCULATION: ${firstnumberDOM.value} + ${secondnumberDOM.value}`
    let desc = getDesc(firstnumberDOM.value,"/",secondnumberDOM.value)
    getOutput(result,desc)
}
function mul(){
    let result  = ` RESULT: ${Number(firstnumberDOM.value) * Number(secondnumberDOM.value)}`
    //let desc = `CALCULATION: ${firstnumberDOM.value} + ${secondnumberDOM.value}`
    let desc = getDesc(firstnumberDOM.value,"x",secondnumberDOM.value)
    getOutput(result,desc)
}
addBtn.addEventListener('click', add)
subBtn.addEventListener('click', sub)
divBtn.addEventListener('click', divi)
mulBtn.addEventListener('click', mul)
