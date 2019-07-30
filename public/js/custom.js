// code sampled and modified from: https://codepen.io/andybarefoot/pen/QMeZda

function resizeGridItem(item){
  const grid = document.getElementsByClassName("itemgrid")[0];
  const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-auto-rows"));
  const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-row-gap"));
  const rowSpan = Math.ceil((item.querySelector(".content").getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems(){
  const allItems = document.getElementsByClassName("item");
  for (x = 0; x < allItems.length; x++){
    resizeGridItem(allItems[x]);
  }
}

function resizeInstance(instance){
  const item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

