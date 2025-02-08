const boxes=document.querySelectorAll('.box');
const display=document.querySelector('.display');
boxes.forEach(box =>{
    let output='';
    box.addEventListener('click',()=>{
        console.log(box);
        
    if(box.innerText==='AC')  {
        display.innerText='';
    }
    else if(box.innerText==="="){
    try{
      output=eval(display.innerText).toString();
      display.innerText=output;
    }
    catch{
        display.innerText = "Error";
        
    }
    }
    else {
        display.innerText+=box.innerText;
    }
})
})
     
