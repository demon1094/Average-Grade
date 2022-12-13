let name = prompt('Whats is the student name?')
let studentName = name

let grade1 = prompt('Type the first grade')
let grade2 = prompt('Type the second grade.')
let grade3 = prompt('Type the third grade.')

let averageGrade = (Number(grade1) + Number(grade2) + Number(grade3)) / 3

const student = document.querySelector('#student-name')
const grade = document.querySelector('#student-grade')

student.innerHTML = studentName
grade.innerHTML = averageGrade.toFixed(1)

const result = document.querySelector('#result')
const resultDiv = document.querySelector('.result')

if (averageGrade < 6) {
  result.innerHTML = 'Reproved'
  resultDiv.style.backgroundColor = '#ff0000'
}