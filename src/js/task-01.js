const navEl = document.querySelector('ul').children.length
console.log(`Number of categories: ${navEl}`);

const navItemEl = document.querySelectorAll('.item')

Array.prototype.forEach.call(navItemEl, (element) => {
  const title = element.querySelector("h2").innerHTML;
  const itemsLength = element.querySelectorAll("li").length;
  console.log(`Category: ${title} / Elements: ${itemsLength}`);
});
