let str1,str2;
str1 = prompt("Введите первое число",'');
let num1 = parseInt(str1);
str2 = prompt("Введите второе число",'');
let num2 = parseInt(str2);
let delitel = 0, p, r;
    if (num1 < num2){
     p=num2; num2=num1; num1=p;
     } 
     do { 
        if (num1%num2==0){
            delitel=num2;
            } 
        else {
            r=num2;
            num2=num1%num2;   
            num1=r;    
            delitel = num2; 
           }
        } 
        while (num1%num2!=0);
        if (delitel!=1) { 
            console.log("Наибольшим общим делителем чисел" + str1 + " и " + str2 + " является число..." + delitel);
            }
        else {
            console.log("Общего делителя нет");
            }
