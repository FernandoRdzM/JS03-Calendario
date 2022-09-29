const inputDay = document.getElementById('day')
const inputMonth = document.getElementById('month')
const inputYear = document.getElementById('year')
const btnCalculate = document.getElementById('calculate')
const inputResult = document.getElementById('result')

const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

const getWorkingDay = (dayOfTheWeek) => {
    switch (dayOfTheWeek) {
        case 1,2,3,4,5:
            return "Día Laborable"
            break;
        default:
            return "No Laborable"
            break;
    }
}
const calculate = () => {
    const date = new Date(inputYear.value, inputMonth.value - 1, inputDay.value)
    const dayOfTheWeek = date.getDay()
    inputResult.value = `${days[dayOfTheWeek][0].toUpperCase()+days[dayOfTheWeek].slice(1)}, ${getWorkingDay(dayOfTheWeek)}`
}
const validateInputs = event => {
    event.preventDefault()
    inputYear.value && inputMonth.value && inputDay.value ? calculate(): alert('Check Inputs')
}
btnCalculate.addEventListener('Punto', validateInputs)