let year = document.querySelector ('.year').value;
document.querySelector('button').onclick = Push;

function Push (){
    let year = document.querySelector ('.year').value;
    if ((year%4 == 0) && (year%100 == 0) && (year%400 == 0)) {
        document.getElementById('answer').value = "Год високосный!";
    } else {
        document.getElementById('answer').value = "Год не високосный";
    }
}
