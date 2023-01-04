let myLeads = ["www.amazonn.com"]

myLeads = JSON.parse(myLeads)

myLeads.push("www.coco.com")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")













inputBtn.addEventListener("click", function(){
   myLeads.push(inputEl.value)
   //Clears input field
        inputEl.value = ""
   //Display items 
   renderLeads()
})

function renderLeads(){
    let listItems =  ""
    for(let i = 0; i < myLeads.length; i++){
         listItems += `
         <li><a target='_blank' href=' ${myLeads[i]}'>
                            ${myLeads[i]}
                        </a></li>`
      
        
         console.log(listItems)
        
 
 ulEl.innerHTML =listItems
}
}