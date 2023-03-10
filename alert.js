var alertInfos={error:{class:"",title:"Erreur !",},success:{class:" success",title:"Succès !",},info:{class:" info",title:"Information :",},warn:{class:" warning",title:"Attention !",}}
function createAlert(text,type){type=type||"error"
const alertInfo=alertInfos[type]
if(!alertInfo)throw new Error("Invalid alert type")
const holder=document.getElementById("alert-holder")
if(!holder)throw new Error("Invalid alert holder")
const alert=document.createElement("div",{className:`alert${alertInfo.class}`})
const close=document.createElement("span",{className:'closebtn'})
const title=document.createElement("strong")
const node=document.createTextNode(` ${text}`)
close.className="closebtn"
close.innerHTML="&times;"
title.innerText=alertInfo.title
alert.className=`alert${alertInfo.class}`
alert.appendChild(close)
alert.appendChild(title)
alert.appendChild(node)
holder.appendChild(alert)
alert.style.display="block"
alert.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"});alert.style.opacity=1;var closed=false;const onClose=()=>{if(closed)return
closed=true
alert.style.opacity=0;setTimeout(()=>{alert.remove()},600);}
close.onclick=onClose
setTimeout(onClose,60000)
return alert}