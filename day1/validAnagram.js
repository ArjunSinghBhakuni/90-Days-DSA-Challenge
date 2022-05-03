/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  s = s.trim().split('').sort()
  t = t.trim().split('').sort()
  
  if(s.length != t.length){
return false
  }
  else{
  for(let i =0;i<s.length;i++){
if(s[i]!=t[i]){
  return false
}
}
  }
  return true
};