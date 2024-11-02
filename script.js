//your code here!

document.addEventListener("DOMContentLoaded", () => {
  const listContainer = document.getElementById("infi-list"); // Target the ol element for infinite scrolling

  // Function to create and append list items
  function addListItems(count = 2) {
    for (let i = 0; i < count; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Item ${listContainer.children.length + 1}`;
      listContainer.appendChild(listItem);
    }
  }

  // Initially add 10 list items
  addListItems(10);

  // Infinite scroll handler within the list container
  listContainer.addEventListener("scroll", () => {
    if (listContainer.scrollTop + listContainer.clientHeight >= listContainer.scrollHeight) {
      addListItems();
    }
  });
});
