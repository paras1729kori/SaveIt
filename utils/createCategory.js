const fs = require("fs");

const createCategory = (categoryName) => {
  let file = `./Category/${categoryName}`;

  // checking format of name
  if (file.includes("-")) {
    console.log("Invalid name format");
    return;
  }

  // checking if file exists
  if (fs.existsSync(`${file}.csv`)) {
    console.log("Category exists");
    return;
  }

  // creating file
  fs.writeFile(
    `${file}.csv`,
    "Username\t\tPassword\t\tDescription\n\n",
    (err) => {
      if (err) throw err;
      console.log("Category created successfully");
    }
  );
};

module.exports = createCategory;
