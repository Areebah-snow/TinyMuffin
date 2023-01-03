let myLeads = []
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
         listItems += `<li><a target='_blank' href=' ${myLeads[i]}'>
                            ${myLeads[i]}
                        </a></li>`
      
        
         console.log(listItems)
        // const list = document.createElement("li")
        // list.textContent = myLeads[i]
        // ulEl.append(list)
 
 ulEl.innerHTML =listItems
}
}