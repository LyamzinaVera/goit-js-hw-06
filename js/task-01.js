const navEl = document.querySelectorAll(".item");
console.log("Number of categories:", + navEl.length);

const listEl = document.querySelectorAll(".item")
listEl.forEach(function (element) {
    
    const title = element.querySelector("h2").textContent;
    const count = element.querySelectorAll("li").length;

    console.log("Category:", title);
    console.log("Elements:", count);
})