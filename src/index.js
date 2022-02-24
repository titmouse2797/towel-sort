module.exports = function towelSort (matrix = []) {
  let result = [];
   if (matrix.length === 'undefined') {
       return result;
   }
  for(let i = 0; i < matrix.length; i++){
      let arr;
      if (i % 2 === 0) {
           arr = matrix[i];
      }else if(i % 2 !== 0) {
          arr = matrix[i].reverse(); 
      }
      result.push(...arr);
  }
   return result;
}
