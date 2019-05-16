let buttonAdd = document.querySelector(".add");
buttonAdd.addEventListener("click",showAdd);

function showAdd(){
    alert("dobavleno");
}

let filter = document.querySelector(".filter-button");
filter.addEventListener("click", doFilter);

function doFilter(){
    let allFilters = document.querySelectorAll(".filter input");
    let name = allFilters[0].value;
    alert(name);
    let date = allFilters[1].value;
    alert(date);
    let hashTag =document.getElementById("filters");
    let hash = hashTag.options[hashTag.selectedIndex].text;
    alert(hash);
    let filter = {};
    if(name!==undefined)
    filter.author = name;
    if(date!==undefined)
    filter.createdAt = new Date(date);
   // alert(filter.createdAt);
    if(hash!==undefined)
    filter.hashTags = hash;
    main.showPhotoPosts(filter);

}