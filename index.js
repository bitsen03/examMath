

// Сколькими способами из колоды карт в 52 листа можно выбрать неупорядоченный набор из 5 карт так,
// чтобы в этом наборе было бы ровно
// 1 король, 2 дамы, 1 пиковая карта
const factorial = (n) => {
return (n !== 0) ? n * factorial(n - 1) : 1;
}


const formulaCombinations = (n,k) => {
return factorial(n) / (factorial(n-k) * factorial(k)) 
//Формула числа сочетаний без повторенний
}


const first = (deck = 52, disorderlySet = 5, firstCard = 1, secondCard = 2, color = 1) => {
    const deleate = deck - ( 13 * color) - (4 - color) - (4 - color)
const comboFirstCard = formulaCombinations(color,firstCard) * formulaCombinations(4-color , secondCard) * formulaCombinations( deleate, disorderlySet - secondCard - firstCard  )
const comboSecondCard = formulaCombinations(4 - color,firstCard ) * formulaCombinations(3,1) * formulaCombinations(deleate,disorderlySet - secondCard - firstCard)
const lastCombo = formulaCombinations(4 - color, firstCard) * formulaCombinations(4 - color, secondCard) * formulaCombinations(deleate, 1) * formulaCombinations(11,1)
return comboFirstCard + comboSecondCard + lastCombo
}
