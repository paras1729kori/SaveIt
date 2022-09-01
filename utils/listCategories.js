const fs = require("fs");

const listCategories = () => {
  let folderPath = "./Category/";
  let files = fs.readdirSync(folderPath);
  if (files.length > 0) {
    files.forEach((file) => {
      console.log(file.replace(".csv", ""));
    });
  } else {
    console.log("No categories exist");
  }
};

module.exports = listCategories;
