let output = document.getElementById('output');
function sum(input1, input2) {
  let finalsum = input1 + input2;
  output.value = finalsum;
}
function dif(input1, input2) {
  let finaldif = input1 - input2;
  output.value = finaldif;
}
function product(input1, input2) {
  let finalproduct = input1 * input2;
  output.value = finalproduct;
}
function div(input1, input2) {
  let finaldiv = input1 / input2;
  output.value = finaldiv;
}
function avg(input1, input2) {
  let finalavg =(input1 + input2)/2;
  output.value = finalavg;
}
function minormax(input1, input2, input3){
  if(input3 == "max"){
    if(input1 >input2){
      output.value = input1;
    }else{
      output.value = input2;
    }
  }else{
    if(input1<input2){
      output.value = input1;
    }else{
      output.value = input2;
    }
  }
}

function calculate(){
  var radios = document.getElementsByTagName('input');
  let input1 = parseInt(document.getElementById('input1').value, 10);
  let input2 = parseInt(document.getElementById('input2').value, 10);
  for (var i = 0; i < radios.length; i++) {
      if (radios[i].type === 'radio' && radios[i].checked) {
        if(radios[i].value == "sum"){
          sum(input1, input2)
        }else if(radios[i].value == "difference"){
          dif(input1, input2);
        }else if(radios[i].value == "product"){
          product(input1, input2);
        }else if(radios[i].value == "division"){
          div(input1, input2);
        }else if(radios[i].value == "avg"){
          avg(input1, input2);
        }else if(radios[i].value == "minimum"){
          minormax(input1, input2, "min");
        }else if(radios[i].value == "maximum"){
          minormax(input1, input2, "max");
        }      
      }
  }
}
