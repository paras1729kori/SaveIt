const fs = require("fs");

const savePassword = (save) => {
  const [category, username, password, desc] = save;
  // validator
  if (!category || !username || !password) {
    console.log(
      "Please provide all the required arguments.\n{category,username,password}"
    );
    return;
  }

  // if category does not exist
  const file = `./Category/${category}.csv`;
  if (!fs.existsSync(file)) {
    console.log("Category does not exist");
    return;
  }

  // if category exists
  const content = `${username}\t\t${password}\t\t${desc}\n\n`;
  fs.appendFile(file, content, (err) => {
    if (err) throw err;
    console.log("Password saved successfully");
  });
};

module.exports = savePassword;
