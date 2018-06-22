//Implement linear search

function linearSearch(arr, number){
    let flag = false;
    for(let i = 0; i < arr.length; i++){
       if(arr[i] === number){
           console.log("Number : " + number + " found at position "  + i);
           flag = true;
       }
    }
    if(!flag){
        console.log("Number not found");
    }
}


let arr = [2, 1, 4, 3, 7, 6, 5];

linearSearch(arr, 7);