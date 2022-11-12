// saturdayFun
function saturdayFun(transportation = 'roller-skate') {
    return `This Saturday, I want to ${transportation}!`
}

// mondayWork
function mondayWork (action = 'go to the office') {
    return `This Monday, I will ${action}.`
}

// wrapAdjective
// function wrapAdjective(result = '*', emphatic = 'a hard worker') {
//     return `You are a ${result}${emphatic}${result}!`
// }
function wrapAdjective (paramenter2 = '*') {
    return function name(parameter1 = 'special') {
        return `You are ${paramenter2}${parameter1}${paramenter2}!`
      }
}