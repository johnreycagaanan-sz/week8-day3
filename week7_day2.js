const arr = [12, 3, 14, 18, 2, 7, 9]

const mergeSortMethod = (arr) => {
    if (arr.length <=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSortMethod(arr.slice(0,mid));
    let right = mergeSortMethod(arr.slice(mid));
    return mergeSort(left, right)
}

const mergeSort = (left, right) => {
    let results = [];
    let i = 0;
    let j = 0;
    while(i <left.length && j < right.length){
        if(right[j] > left[i]){
            results.push(left[i])
            i++
        }else{
            results.push(right[j])
            j++
        }
    }
    while(i < left.length){
        results.push(left[i])
        i++
    }

    while(j < right.length){
        results.push(right[j])
        j++
    }

    return results
}

// console.log(mergeSortMethod(arr))

const quickSortMethod = (arr, left =0, right = arr.length -1 ) => {
    if(left < right ){
        let pivotIndex = pivot(arr, left, right);
        quickSortMethod(arr, left, pivotIndex -1)
        quickSortMethod(arr, pivotIndex +1, right)
    }
    return arr;
}
 
const pivot = (arr, left = 0, right = arr.length - 1) =>{
    let pivot = arr[left]
    let swapIndex = left

    for(let i =left+1; i <= right; i++){
        if(pivot > arr[i]){
            swapIndex++;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]
        }
    }
    [arr[left], arr[swapIndex]] = [arr[swapIndex], arr[left]]
    return swapIndex;
}
console.log(quickSortMethod(arr))
