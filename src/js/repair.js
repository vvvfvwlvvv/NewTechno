var isOpen = false;
document.querySelector(".repair__button").onclick = function(){
  
  var elem = document.querySelector(".list-card");
  var btn = document.querySelector(".repair__button");
  if(isOpen == false){
      isOpen = true;
      elem.style.height = "400px";
      btn.innerHTML = "Свернуть";
  }
  else{
      isOpen = false;
      elem.style.height = "200px";
      btn.innerHTML = "Показать всё";
  }   
};