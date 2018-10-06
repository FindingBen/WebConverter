let number1inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("inputField");
let everyNumber:HTMLSpanElement=<HTMLSpanElement>document.getElementById("allNumbers");
let number1string: string = number1inputElement.value;

let convertToGram: HTMLButtonElement=<HTMLButtonElement>document.getElementById("toGrams");
let convertToOunces:HTMLButtonElement=<HTMLButtonElement>document.getElementById("toOunces");



function ounces()
{
    let a:string = number1inputElement.value;  
    let b:number = parseFloat(a)/28.34952;
    everyNumber.innerHTML = b.toString();
}

function grams(){
let a:string=number1inputElement.value;
let b:number=parseFloat(a)*28.34952;
everyNumber.innerHTML=b.toString();

}

convertToGram.addEventListener("click",grams);
convertToOunces.addEventListener("click",ounces);

