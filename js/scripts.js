function factorial(num)
{
  if (num < 0) {
    return -1;
  } else if (num===0) {
    return 1;
  }
  else{
    return (num * factorial(num-1));
  }
};


$(document).ready(function() {

  $("#numberInput").submit(function(event) {
    // var num = parseInt(prompt("Enter a number:"));
    var num = $("input#number").val();
    alert(num);
    var num=factorial(num);
    alert(num);


    // alert(num);
    // num = parseInt(num);
    // alert(num);
    // var result = 1;
    // for(num; num != 0; num -= 1) {
    //   result *= num;
    // }
    // alert(result);

    event.preventDefault();
    });

});
