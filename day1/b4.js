function checkUniqueness(arr){
    let counter = 0
    for(let i= 0; i <= arr.length; i++){
        for(let j = 0; j <= i; j++){
            if(arr[i] == arr[j])
            {
                counter++;
            }
            else 
            {
        
            }
        }
    }
    return counter > 1 ;
}

const arr1 = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arr1));

const arr2 = [4, 6, 2, 3]
console.log(checkUniqueness(arr2));