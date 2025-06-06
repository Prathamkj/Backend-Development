// for each
var arr = [1, 2, 3, 4, 5];
arr.forEach(function(val){
    console.log(val + " helloworld");
    // hellow add kar diya
})
// map -- array se naya array banata hai
var arr = [1, 2, 3, 4, 5,6,7,8,9,10];
// map function is used to create a new array by applying a function to each element of the original array
var newArr = arr.map(function(val){
    return val + 1;
})
CONSOLE.log(newArr);

// filter -- Array se naya arraya banana hai toh we use filter
var ans = arr.filter(function(val){
    if(val > 3){
        return true;
    }
    else{
        return false;
    }
})
console.log(ans);
// find -- first element ko dhundkh ke dega

