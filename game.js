    document.body.style.background = "grey";
    var resetButton = document.getElementById("btn");
    resetButton.textContent = "Reset";
    var cell = document.getElementsByTagName("td");
    resetButton.addEventListener("click", function(){
        for(var i = 0 ; i<cell.length; i++){
        cell[i].textContent = " ";
        }
    });
    for(var i = 0 ; i<cell.length; i++){
        cell[i].style.height = "120px";
        cell[i].style.width = "120px";
        cell[i].addEventListener("click", function(){
           if(this.textContent == ""){
                this.innerHTML = "<strong>X<strong>";
                this.style.fontSize="xx-large";
            }else if(this.textContent == "X"){
                this.innerHTML = "<strong>O<strong>";
                this.style.fontSize="xx-large";
            }else{
                this.textContent = "";
            }
        })
    }



