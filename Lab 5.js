for(let i = 1; i <= 10; i++){
    console.log(i);
}

for(let i = 10; i >= 1; i--){
    console.log(i);
}

let i = 1;
while(i <= 10) {
    console.log(i);
    i++
}

let j =  10;
do {
    console.log(j);
    j--;
}
while(j >= 1);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let number of numbers) {
    console.log(number);
}