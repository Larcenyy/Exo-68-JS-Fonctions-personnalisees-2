



let element = document.querySelectorAll("p");
let random;

function myFunc(math) {
    random = Math.trunc(Math.random() * 100);
    return random
}

for( let i = 0; i < element.length; i++){
    myFunc()
    element[i] = element[i].innerText;
    element[i].innerText = random;
}

console.log(element);