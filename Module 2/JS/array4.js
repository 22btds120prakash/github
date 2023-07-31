//map and filter in this
/*let nos = [4 ,2 ,13 ,4 ,25 ,6 ,17 ,8];
nos.map(
    function(n)
{
    console.log(n);

}
)*/
var nos = [1, 5, 2, 9, 3];
var m = 0;

nos.map(function(n) {
  if (m < n) {
    m = n;
  }
});

console.log("The largest number is", m);
