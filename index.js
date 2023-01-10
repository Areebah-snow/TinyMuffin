let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


tabBtn.addEventListener("click", function(){
    // chrome.tabs.query({
     
    // )
    chrome.tabs.query({active : true, currentWindow: true},
        function(tabs){
            console.log(tabs)
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            render(myLeads)
        })
})
function render(leads){
    let listItems =  ""
    for(let i = 0; i < leads.length; i++){
         listItems += `
             <li><a target='_blank' href=' ${leads[i]}'>
                            ${leads[i]}
             </a></li>`
    }
    ulEl.innerHTML =listItems                                                                                                                            
}

deleteBtn.addEventListener("dblclick", function(){
      localStorage.clear()
      myLeads = []
      render(myLeads)
})

inputBtn.addEventListener("click", function(){
   myLeads.push(inputEl.value) 
   //Clears input field
        inputEl.value = ""
   //Display items 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    //verify it works
   console.log(localStorage.getItem("myLeads"))
})

