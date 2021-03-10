const button=document.getElementById("button");
const list= document.querySelector(".list");
const addedItem = document.querySelector("input");
const panal=document.getElementsByClassName("panel")[0];
const divData=document.getElementById('app');

divData.addEventListener("keyup" ,e=>{
   if (e.key=="Enter" && addedItem.value!=="") {
takeInput();
   }
})
button.addEventListener("click", e=>{
   if(addedItem.value==""){
     return alert("please enter todo");
   }
   const li=listBuilder(addedItem.value);
   takeInput(li);
})
list.addEventListener("click", e=>{
   let option= e.target;
   let liItem= option.parentNode;
   switch(option.className){  

   case "delete":{
      list.removeChild(liItem);
      break
      }
      
   case"complete":{
      if(option.checked){
      liItem.style.textDecoration ="line-through";
      liItem.style.textDecorationThickness="18%";
      liItem.style.textDecorationColor ="red";
   }
   else{
      liItem.style.textDecoration="none";
   }
   break;
   }

   case "edit":{
      let newInput= document.createElement("input")
      list.replaceChild(newInput,liItem);
      newInput.addEventListener("keyup", e=>{
      if(e.key=="Enter"){      
         let newEdit= listBuilder(e.target.value);
         list.replaceChild(newEdit,newInput)
      }
   }) 
   break;
   }
}});
panal.addEventListener("click", e=>{
   let option = e.target;
   if(option.innerText=="clear"){
   let listItems=document.getElementsByClassName("listed-item");
   for(let i=listItems.length-1;i>=0;i--){
      list.removeChild(listItems[i]);
   }}
   if(option.innerText=="finished"){
      let checkBoxes=document.getElementsByClassName('complete');
      for(let i=checkBoxes.length-1; i>=0;i--){
         if(checkBoxes[i].checked==true){
            list.removeChild(checkBoxes[i].parentElement);
         }
      }
   }
});

function takeInput(){
   const li=listBuilder(addedItem.value);
   list.appendChild(li);
   addedItem.value=""
}  
function listBuilder(value){   
const item=document.createElement("li");
item.innerText=value;
item.className="listed-item";
item.appendChild(makeDeleteButton());
item.appendChild(makeEditButton());
item.appendChild(makeCheckBox());
return item;
}
function makeDeleteButton(){
let deleteButton = document.createElement("button");
 deleteButton.type="button";
deleteButton.className="delete";
deleteButton.innerText="remove";
return deleteButton
}
function makeEditButton(){
let edit= document.createElement("button");
edit.type="button";
edit.className="edit"
edit.innerText="edit";
return edit
}
function makeCheckBox(){
 let completer = document.createElement("input");
completer.type="checkbox";
completer.className="complete";
return completer
}