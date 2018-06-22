//Implement Binary Search

function binarySearch(arr, number) {

    var low = 0;
    var high = arr.length - 1;
    var mid;
    var flag = false;

    while(low <= high){
        mid = Math.floor((low + high) / 2);

        if(number < arr[mid]){
            high = mid - 1;
        }else if(number > arr[mid]){
            low = mid + 1;
        }else if(arr[mid] === number){
            console.log("Number Found");
            flag = true;
            return "Done";
        }

    }
    if(!flag){
        console.log("Not found");
    }


}


let arr = [1,2,3,4,5,6,7,8];

binarySearch(arr, 8);