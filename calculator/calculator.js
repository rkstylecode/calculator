let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let string = " ";
let arr = Array.from(buttons);

arr.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.innerText==='='){
            string = eval(string).toString();
            input.value = string;
        }
        else if(button.innerText==='AC'){
            string = "";
            input.value = string;
        }
        else if(button.innerText==='DEL')
        {
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            let btnCh = button.innerText;
            let ch = string[string.length-1];
            if((ch==='%' || ch==='/' || ch==='*' || ch==='+' || ch==='-') && 
            (btnCh==='%' || btnCh==='/' || btnCh==='*' || btnCh==='+' || btnCh==='-')){
                string = string.substring(0, string.length-1);
            }

            string += button.innerText;
            input.value = string; 
        }
    });
});
