//https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem3825/1/#


// { Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
       
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let m = parseInt(readLine());
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.findMinDiff(arr, n, m);
        console.log(res);
        
    }
}// } Driver Code Ends

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/

class Solution{
    findMinDiff(arr,n,m){
     
    // If there are no chocolates or
    // number of students is 0
    if (m === 0 || n === 0)
        return 0;
   
    // Sort the given packets
    arr.sort(function(a, b){return a - b});
   
    // Number of students cannot be
    // more than number of packets
    if (n < m)
        return -1;
   
    // Largest number of chocolates
    let min_diff = Number.MAX_VALUE;
   
    // Find the subarray of size m
    // such that difference between
    // last (maximum in case of
    // sorted) and first (minimum in
    // case of sorted) elements of
    // subarray is minimum.
    for(let i = 0; i + m - 1 < n; i++)
    {
        let diff = arr[i + m - 1] - arr[i];
           
        if (diff < min_diff)
            min_diff = diff;
    }
    return min_diff;
}
}
