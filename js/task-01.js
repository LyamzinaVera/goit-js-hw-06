const navEl = document.querySelectorAll(".item");
console.log("Number of categories:", + navEl.length);

const listEl = document.querySelectorAll(".item")
listEl.forEach(function (element) {

    const title = element.firstElementChild.textContent;
    const count = element.lastElementChild.children.length;

    console.log("Category:", title);
    console.log("Elements:", count);
})



