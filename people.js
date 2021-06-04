const table = document.getElementsByTagName("table")[0];

// Fetches the data and creates a response
fetch("people.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      // For each element, create a table row and table data
      let tableRow = document.createElement("TR");
      let tableName = document.createElement("TD");
      let tableAge = document.createElement("TD");
      let tableCity = document.createElement("TD");
      let tableCategory = document.createElement("TD");

      // Changes the innerHTML to the corresponding data
      tableName.innerHTML = element.name;
      tableAge.innerHTML = element.age;
      tableCity.innerHTML = element.city;
      tableCategory.innerHTML = element.category;

      // Appends the table data to the table row, and the table row to the table itself
      tableRow.appendChild(tableName);
      tableRow.appendChild(tableAge);
      tableRow.appendChild(tableCity);
      tableRow.appendChild(tableCategory);

      table.appendChild(tableRow);
    });
  });
