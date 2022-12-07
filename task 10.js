let arr = [...Array(100)].map((_, ind) => ind + 1)
while(true){
  let ask = prompt(`Заданное число большое или меньше, чем ${arr[Math.floor(arr.length / 2) - 1]} ?`)
  if(!ask) break
  if(ask == 'Оно' || ask == 'оно'){
    alert(`Загаданное число - ${arr[Math.floor(arr.length / 2) - 1]}`)
 
    break
  }
  if(ask == 'Больше' || ask == 'больше'){
    arr = arr.slice(Math.floor(arr.length / 2))
  }
  if(ask == 'Меньше' || ask == 'меньше') {
    arr = arr.slice(0, Math.floor(arr.length / 2))
  }
}
