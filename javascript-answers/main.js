// Question 1
function reverseNumber() {
    let number=document.getElementById("reverseNumber").value
    document.getElementById("reverseNumberResult").innerHTML=number.toString().split("").reverse().join("")
  

}
// Question 2
function palindromeCheck(){
    function splitArrays(arr){
        firstTemp=arr.splice(0,word.length/2)
        secondTemp=[...arr].reverse()  
        return firstTemp.every((val,index)=> val===secondTemp[index])? document.getElementById("palindromeCheckResult").innerHTML="this word is palindrome":document.getElementById("palindromeCheckResult").innerHTML="this word NOT is palindrome"
    }
    let word=document.getElementById("palindrome").value
    let tempArray=[],firstTemp,secondTemp
    if(word.length%2===1){
       
       tempArray=[...word]
       tempArray.splice(word.length/2,1)
       return splitArrays(tempArray)
       
        
    }
    else{
        tempArray=[...word]
        return splitArrays(tempArray)
    }
}
// Question 3
function allCombinations(){
    let word=(document.getElementById("stringCombinations").value).split("")
    let result=word.map((val)=>word.map((index)=>val+word[index]))
    console.log(result)
    // didnt finished


}
// Question 4
function alpOrder(){
    let word=(document.getElementById("alpOrder").value).split("")
    document.getElementById("alpOrderResult").innerHTML=word.sort().join("")
}

// Question 5
function firstLetterUpper(){
    let word=(document.getElementById("firstLetterUpper").value).split(" ")
   
    document.getElementById("firstLetterUpperResult").innerHTML=word.map(val=>val[0].toUpperCase()+val.slice(1)).join(" ")
}

// Question 6
function longestString(){
    let word=(document.getElementById("longestString").value).split(" ")
    let tempArray=word.map(val=>val.length)
    document.getElementById("longestStringResult").innerHTML=word[tempArray.indexOf(Math.max(...tempArray))]
}

// Question 7
function vowelCount(){
    let word=(document.getElementById("vowelCount").value).split(" ").join("")
    document.getElementById("vowelCountResult").innerHTML=word.match(/[aeiou]/g).length
}

// Question 8
function primeNumber(){
    let word=parseInt(document.getElementById("primeNumber").value)
    
    function isPrime(num) {
        var sqrtnum=Math.floor(Math.sqrt(num));
          var prime = num != 1;
          for(var i=2; i<sqrtnum+1; i++) {
              if(num % i == 0) {
                  prime = false;
                  break;
              }
          }
          return prime;
      }
      document.getElementById("primeNumberResult").innerHTML=isPrime(word)?"number is prime":"number is NOT prime"
    
}

// Question 9
function findType(){
  
    document.getElementById("findTypeResult").innerHTML="typeof value"
}

// Question 10
function matrix(){
    let matrixX=parseInt(document.getElementById("matrixX").value)
    let matrixY=parseInt(document.getElementById("matrixY").value)
   
    let result=new Array(matrixY).fill(0).map(() => new Array(matrixX).fill("*"))
    
    document.getElementById("matrixResult").innerHTML=result.map(row=>row.join("")+"<br/>").join("")
}
// Question 11
function highAndLow(){
    let example=[1,2,3,4,5,6,7,8,9]
    function result(arr){
        arr.sort
        return [arr[1], arr[arr.length-2]]
    }
    document.getElementById("highAndLowResult").innerHTML=result(example)

}
// Question 12
function perfectNumber(){
    let number=parseInt(document.getElementById("perfectNumber").value)
    function is_perfect(number){
    let temp = 0;
   for(let i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
     temp === number && temp !== 0?document.getElementById("perfectNumberResult").innerHTML="It is a perfect number.":document.getElementById("perfectNumberResult").innerHTML="It is not a perfect number.";
      
   
}
is_perfect(number)
}

// Question 13
function factors(){
let n=parseInt(document.getElementById("factors").value)  

 let num_factors = [], i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
 num_factors.sort(function(x, y)
   {
     return x - y;});  
     document.getElementById("factorsResult").innerHTML= num_factors;
     
    }
// Question 14

function coins() {
    let word=parseInt(document.getElementById("coins").value)
    let cent=[25, 10, 5, 2, 1]
    let result=[]
   
    
    for (let i=0; i<cent.length; i++) {
        while(word>=cent[i]){
            result.push(cent[i])
            word-=cent[i]
        }

    }
    document.getElementById("coinsResult").innerHTML= result
   
  }
  // Question 15

  function exponentiation() {
    let exponent=parseInt(document.getElementById("exponent").value)
    let base=parseInt(document.getElementById("base").value)
   document.getElementById("exponentiationResult").innerHTML= exponent**base
   
  }

  // Question 16

  function unique_chars() {
    let word=(document.getElementById("unique_chars").value).split("")
    let uniq=[]
    word.forEach(val=> {
        if(uniq.indexOf(val)==-1){
            uniq.push(val)
        }
    })
    
   document.getElementById("unique_charsResult").innerHTML= uniq.join("")
   
  }


  // Question 17

  function letter_occurrences() {
    let word=(document.getElementById("letter_occurrences").value).split("")
    let word2=[...word],result=[]
    let occurrence=0
    word.forEach((val)=>{
        while(word2.indexOf(val)>-1){   
            occurrence++
            word2.splice(word2.indexOf(val),1)
        }
        if(occurrence>0){
        result.push(val+":" +occurrence)
        occurrence=0;}
    })
    
    
   document.getElementById("letter_occurrencesResult").innerHTML= result
  }

   // Question 18
   function binary_search() {
    let num=parseInt(document.getElementById("binary_search").value)
    let result= document.getElementById("binary_searchResult")
    let recursiveFunction = function (arr, x, start, end) {
        
        if (start > end) return false;
        let mid=Math.floor((start + end)/2);
        if (arr[mid]===x) return true;
        if(arr[mid] > x)
            return recursiveFunction(arr, x, start, mid-1);
        else
            return recursiveFunction(arr, x, mid+1, end);
    }
    let arr = [1, 3, 5, 7, 8, 9]
    result.innerHTML=recursiveFunction(arr,num,0,arr.length-1)?" Found" :"NOT Found" 
  
   
  }
   // Question 19
   function larger_then_number() {
    let num=parseInt(document.getElementById("larger_then_number").value)
    arr =[1,3,5,7,8,9,23,16,45,999,0]

    document.getElementById("larger_then_number_result").innerHTML=arr.filter(val=> val>num)
    
  }
    // Question 20
    function random_string() {
        let num=parseInt(document.getElementById("random_string").value)
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for ( var i = 0; i < num; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
       }
        
        document.getElementById("random_string_result").innerHTML=result
      
       
      }
      // Question 21
    function subnet() {
        let num=parseInt(document.getElementById("subnet").value)
       let example=[1, 2, 3]
       function subsetArray(arr, arr_size){
          var result_last = [], 
              result;
         
      for(var x = 0; x < Math.pow(2, arr.length); x++)
        {
          result = [];
          i = arr.length - 1; 
           do
            {
            if( (x & (1 << i)) !== 0)
                {
                   result.push(arr[i]);
                 }
              }  while(i--);
      
          if( result.length >= arr_size)
             {
                result_last.push(result);
              }
          }
      
          return result_last; 
      }
        
            
       console.log(subsetArray(example,num))   
       
        
        document.getElementById("subnet_result").innerHTML=subsetArray(example,num)
      
       
      }

        // Question 22
    function occurrences_char() {
        let argument=document.getElementById("argument").value
        let character=document.getElementById("character").value
        function count_occurrences(arg,char){
            let count=0, copyArg=arg.split("")
            while(copyArg.indexOf(char)>-1){
                count++
                copyArg.splice(copyArg.indexOf(char),1)
            }
            return count
        }
        document.getElementById("occurrences_char_result").innerHTML=count_occurrences(argument,character)
      
      }

          // Question 23
    function first_notrepeated_char() {
        let word=(document.getElementById("first_notrepeated_char").value).split("")
        let result =word.filter((val,index)=> {
            let res
            let newArray=word.slice(index,1)
            const equal=(el)=>el==val
            console.log( newArray.some(equal))
            if(!word.some(equal)){
                
            res=val   
                
            }
            return res
        })
       
        document.getElementById("first_notrepeated_char_result").innerHTML=result
          
      }

       // Question 24
       function bubble(){
        let arr=[12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
        let bubbleSort = (inputArr) => {
            let len = inputArr.length;
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len; j++) {
                    if (inputArr[j] > inputArr[j + 1]) {
                        let tmp = inputArr[j];
                        inputArr[j] = inputArr[j + 1];
                        inputArr[j + 1] = tmp;
                    }
                }
            }
            return inputArr;
        };

        document.getElementById("bubble_result").innerHTML = bubbleSort(arr).reverse()
       }

         // Question 25 
      
         function country(){
            let arr=["Australia", "Germany", "United States of America"]
            let all_length=arr.map(val=>val.length)
            console.log(arr[all_length.indexOf(Math.max(...all_length))])
    
            document.getElementById("country_result").innerHTML =  arr[all_length.indexOf(Math.max(...all_length))]
           }

           // Question 26
      
           function longest_substring(){
            let word=(document.getElementById("longest_substring").value)

            function sort(names)
            {
               let  string="";
                let substr="";
                let nameString=names.split("");
                for(j=0;j<nameString.length;j++) {
                    for(i=j;i<nameString.length;i++) {
                        if(string.includes(nameString[i]))
                            break;
                        else
                            string+=nameString[i];
                     }
                     if(substr.length<string.length)
                     substr=string;
                     string="";
                }
                return substr;
            }
            document.getElementById("longest_substring_result").innerHTML=sort(word)
           }
              // Question 27
      
              function longest_palindrome(){
                let str=(document.getElementById("longest_palindrome").value)
                let rev = str.split("").reverse().join("").trim();
                let len = str.length;
                let a="";
                let result = [];
                for(let i = 0 ; i < len ; i++){
                    for(let j = len ; j > i ; j--){
                        a = rev.slice(i,j);
                        if(str.includes(a)){
                            result.push(a);
                            break;
                        }
                    }
                }
                result.sort((a,b) => { return b.length - a.length})
                let longPalindrome = result.find((value)=>{
                    return value === value.split('').reverse().join('') && value.length > 1
                })
            
                document.getElementById("longest_palindrome_result").innerHTML=longPalindrome
               }
               // Question 28

               function question28(){
                function main_func(msg, callbackFunction){
                     return msg+callbackFunction()}
                function parameter_func(){
                    return "I am parameter function"
                }
                console.log(main_func("Hello ", parameter_func))
               

               }
               // Question 29
               function question29(){
                console.log(question29.name)
               

               }





