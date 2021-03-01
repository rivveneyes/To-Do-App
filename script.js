const button=document.getElementById("button");
const list= document.querySelector(".list");
const addedItem = document.querySelector("input");
const panal=document.getElementsByClassName("panel")[0];
const divData=document.getElementById('app');



divData.addEventListener("keyup" ,e=>{
   if (e.key=="Enter" && addedItem.value!=="") {
 const li=listBuilder(addedItem.value);
cycleReste(li);
   }
})

button.addEventListener("click", e=>{
   if(addedItem.value==""){
      alert("please enter todo");
   }
   else{
   const li=listBuilder(addedItem.value);
   cycleReste(li);
   }
})



list.addEventListener("click", e=>{
   var option= e.target;
   var liItem= option.parentNode;

   switch(option.className){   
   case "delete":{
      list.removeChild(liItem);
      break
      }
      
   case"complete":{
      if(option.checked){
      liItem.style.textDecoration ="line-through";
      liItem.style.textDecorationColor ="red";
   }
   else{
      liItem.style.textDecoration="none";
   }
   break;
   }

   case "edit":{
      let newInput= document.createElement("input")
      newInput.className="replace listed-item"
      newInput.addEventListener("keyup", e=>{
      if(e.key=="Enter"){      
         let newEdit= listBuilder(e.target.value);
         list.replaceChild(newEdit,newInput)
      }
   })
      list.replaceChild(newInput,liItem);
      break;
   }
}}
)
;
panal.addEventListener("click", e=>{
   var option = e.target;
   var listItems=document.getElementsByClassName("listed-item");
   var checkBoxes=document.getElementsByClassName('complete');
   
   if(option.innerText=="clear"){   
   for(let i=listItems.length-1;i>=0;i--){
      list.removeChild(listItems[i]);
   }}
   if(option.innerText=="finished"){
   
      for(let i=checkBoxes.length-1; i>=0;i--){
         if(checkBoxes[i].checked==true){
            list.removeChild(checkBoxes[i].parentElement);
         }
      }
   }
});


function listBuilder(value){
var item=document.createElement("li");
var remover = document.createElement("button");
var edit= document.createElement("button");
var completer = document.createElement("input");

remover.type="button";
remover.className="delete";
remover.innerText="remove";

completer.type="checkbox";
completer.className="complete";

edit.type="button";
edit.className="edit"
edit.innerText="edit";

item.innerText=value;
item.className="listed-item";
item.appendChild(remover);
item.appendChild(edit);
item.appendChild(completer);
return item;
}



function cycleReste(item){
list.appendChild(item);
addedItem.value=""
}
