// src/lib/healthCardGenerator.ts

export function genHCN(){
  let random = Math.floor(Math.random()* 900000000) + 100000000

  let oddSum = 0
  let evenSum = 0
  for (let i=0; i<9; i++){
    let digit = Math.floor(random / (10 ** (8 - i))) % 10;

    //Even
    if (i%2 ==1){
      evenSum += digit
    }
    //Odd
    else{
      digit = 2 * digit 
      if (digit>=10){
        digit= Math.floor(digit/10) + digit%10 
      }
      oddSum+= digit
    }
  }

  let total = oddSum + evenSum
  let lastDigit = (10 - (total % 10)) % 10;
  return random * 10 + lastDigit
}

//5346497734
// 5+4+4+7+3 = 23
// 6 + 3 + 9 + 5 + 8 = 31
// 31 + 23 = 54