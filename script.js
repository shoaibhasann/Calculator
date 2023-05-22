let text = "" ;
const btn = document.querySelectorAll(".btn");


Array.from(btn).forEach((button) =>{
  button.addEventListener('click', (e) =>{
  if(e.target.innerHTML == '='){
    text = eval(text);
    document.getElementById('calc-input').value = text;
  }
 else if(e.target.innerHTML == 'AC'){
    text = "";
    document.getElementById('calc-input').value = text;
  }
  else if(e.target.innerHTML == 'DE'){
    text = text.substring(0,text.length -1);
    document.getElementById('calc-input').value = text; 
  }
  else if (e.target.innerHTML == '%'){
    
  }
   
  else{
    text = text + e.target.innerHTML;
    document.getElementById('calc-input').value = text;
  }
       
  })
})

