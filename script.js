const button=document.getElementById("button");
const list= document.querySelector(".list");
const addedItem = document.querySelector("input");
const panal=document.getElementsByClassName("panel")[0];
const divData=document.getElementById('app');

divData.addEventListener("keyup" ,e=>{
   if (e.key=="Enter" && addedItem.value!=="") {
listBuilder();
   }
})
button.addEventListener("click", e=>{
   if(addedItem.value==""){
      alert("please enter todo");
   }
   else{
   listBuilder();
   }
})



list.addEventListener("click", e=>{
   var option= e.target;
   if(option.className == "delete"){
      list.removeChild(option.parentNode)
      }
   if(option.className =="complete"){
      if(option.checked){
      option.parentNode.style.textDecoration ="line-through";
   }
   else{
      option.parentNode.style.textDecoration="none";
   }
   }

})


panal.addEventListener("click", e=>{
   var option = e.target;
   var listItems=document.getElementsByClassName("listed-item");
   var checkBoxes=document.getElementsByClassName('complete');
   
   if(option.innerText=="clear"){   
   for(let i=listItems.length-1;i>=0;i--){
      list.removeChild(listItems[i]);
   }}
   if(option.innerText=="finished"){
   console.log(checkBoxes)
      for(let i=0; i<checkBoxes.length;i++){
         if(checkBoxes[i].checked==true){
            list.removeChild(checkBoxes[i].parentElement);
         }

      
      }
   }
});


function listBuilder(){
var item=document.createElement("li");
var remover = document.createElement("button");
var completer = document.createElement("input");

remover.type="button";
remover.className="delete";
remover.innerText="remove";
completer.type="checkbox";
completer.className="complete";
console.log(completer);

item.innerText=addedItem.value;
item.className="listed-item";

item.appendChild(remover);
item.appendChild(completer)

console.log(item);
list.appendChild(item)
addedItem.value=""
}
