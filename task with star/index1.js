let year = document.querySelector ('.year').value;
document.querySelector('button').onclick = Push;
function Push() {
if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
    console.log('Да');
} else {
    console.log('Нет');
}
}