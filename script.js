const button=document.getElementById("button");
const list= document.querySelector(".list");
const addedItem = document.querySelector("input");


button.addEventListener("click" ,e=>{
   let item=document.createElement("li");
   let remover = document.createElement("button");
   remover.type="button";
   remover.innerText="button"
   console.log(remover);
   item.innerText=addedItem.value;
   item.appendChild(remover);
   console.log(item);
   list.appendChild(item)
   
   addedItem.value="";
})



