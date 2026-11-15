const input = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        if(btn.textContent === "Ac"){
            input.value = "";
        }else if(btn.textContent === "="){
            input.value = eval(input.value );
        }
        else if(btn.textContent === "⌫"){
            input.value = input.value.slice(0, -1);
        }else{
            input.value = input.value + btn.textContent;
        }
        

    });
});