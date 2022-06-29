function hideAllSections(){
  var sections = document.querySelectorAll("section");
  for(let i=0; i<sections.length;i++){
    if(!sections[i].classList.contains("hidden"))
      sections[i].classList.add("hidden");
  }
}

function showSection(section){
  let s = document.querySelector(section);
  hideAllSections();
  s.classList.remove("hidden");
}
