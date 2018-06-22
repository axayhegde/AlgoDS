//Implement selection Sort

function selectionSort(arr) {

    let temp = 0;
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {

            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

        }
    }
    console.log(arr);
}

var arr = [2, 1, 4, 3, 7, 6, 5];

selectionSort(arr);