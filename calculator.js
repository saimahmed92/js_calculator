var input1 = null;
var input2 = null;
var input_opr = "";
var result = null;
var temp = "";
var eq = "";

function inputvalue(value){
  if(input_opr == ""){
    if((value == ".") && (temp == "")){
      temp = "0.";
    }else{
      temp = temp + value;
    }
    input1 = Number(temp);
    eq = temp;
    document.getElementById('main').value = temp;


  }else{
    if((value == ".") && (temp == "")){
      temp = "0.";
    }else{
      temp = temp + value;
    }
    input2 = Number(temp);
    document.getElementById('main').value = temp;
    }
  }

/*function inputvalue(value){
  var temp = "";
  if(input_opr == ""){
    if(input1 == null){
      input1 = value;
    }else{
      temp = String(input1);
      alert(temp);
      temp = temp + String(value);
      input1 = Number(temp);
    }


  }else{
    if(input2 == null){
      input2 = value;
    }else{
      temp = String(input2);
      temp = temp + String(value);
      input2 = Number(temp);
    }
  }


  alert(temp);
}*/

function inputoperator(value){
  if(input_opr == ""){
    input_opr = value;
  }
  temp = "";
  eq = eq + input_opr;
  document.getElementById('history').value = eq;
}

function operation(){
  if((input1 != null ) && (input2 != null ) && (input_opr != "" )){
    if(input_opr == "+"){
      result = input1 + input2;
    }else if (input_opr == "-"){
      result = input1 - input2;
    }else if(input_opr == "X"){
      result = input1 * input2;
    }else if(input_opr == "/"){
      result = input1 / input2;
    }
  }
  eq = eq + temp;
  document.getElementById('history').value = eq;
  document.getElementById('main').value = result;
  /*alert(input1);
  alert(input_opr);
  alert(input2);
  alert(result);
  alert(eq);*/
}
//alert(input1 + "<br>" + input2 + "<br>" + input_opr);
