// Datos de ejemplo (puedes reemplazar esto con tus datos)
const data = [
    "Jose",
    "Kevin",
    "Marcos",
    "Juan",
    "Ramiro"
  ];
  
  const searchInput = document.getElementById("search");
  const resultsList = document.getElementById("results");
  
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    resultsList.innerHTML = "";
  
    if (searchTerm.length === 0) {
      resultsList.style.display = "none";
      return;
    }
  
    const filteredResults = data.filter(result => result.toLowerCase().includes(searchTerm));
  
    if (filteredResults.length > 0) {
      resultsList.style.display = "block";
      filteredResults.forEach(result => {
        const listItem = document.createElement("li");
        listItem.textContent = result;
        listItem.addEventListener("click", () => {
          searchInput.value = result;
          resultsList.style.display = "none";
        });
        resultsList.appendChild(listItem);
      });
    } else {
      resultsList.style.display = "none";
    }
  });
  
  document.addEventListener("click", function (e) {
    if (!resultsList.contains(e.target)) {
      resultsList.style.display = "none";
    }
  });
  