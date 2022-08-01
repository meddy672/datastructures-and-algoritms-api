/**
 * - If the number is divisible by 3 log fizz instead of the number
 * - If the number is divisible by 5 log out buzz instead of that number
 * - If the number is dvisible by three and 5 log out fizzbuzz instead of that number
 * - If the number is not divisble by 3 o 5 just log out the number
 */

function fizzBuzz({num, divisor1, divisor2}: IFizzBuzz ): void {
   enum Remainder { ZERO = 0 };

   if (num === 0) {
        return;
   } else {
        if ((num % divisor1) === 0 && (num % divisor2) === 0) console.log('fizzbuzz');
        else if ((num % divisor1) === 0) console.log('fizz');
        else if ((num % divisor2) === 0) console.log('buzz');
        else console.log(num);
        num--;
        fizzBuzz({
          num,
          divisor1,
          divisor2
        });
   }
}

interface IFizzBuzz {
     num: number;
     divisor1: number;
     divisor2: number
} 

fizzBuzz({
    num: 20,
    divisor1: 3,
    divisor2: 5
});