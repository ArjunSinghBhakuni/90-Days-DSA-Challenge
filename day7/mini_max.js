//https://www.geeksforgeeks.org/minimum-and-maximum-number-of-nodes-between-critical-points/

function maxmindis(arr){
 var distance = 0
 max = arr[arr.length-1]-arr[0]
 min = Infinity
    for(i=0;i<arr.length;i++){
        
            distance = Math.abs(arr[i+1]-arr[i])
            //console.log(distance)
              if(distance<min){
                min = distance
            
            
            }
            
        }
         console.log(min,max)
        
}



function minMax(N,arr){
	//write your code here
	  var arr2 = []

    for(i=1;i<N-1;i++){
        if((arr[i]<arr[i-1] && arr[i]<arr[i+1]) || (arr[i]>arr[i-1] && arr[i]>arr[i+1]) ){
             arr2.push(i)
        }
        
    }
   //  console.log(arr2)
    if(arr2.length<=1){
        console.log(-1,-1)
    }  else{
     maxmindis(arr2)
        }
}
