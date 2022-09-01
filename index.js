const program = require("commander");
const log = console.log;

// utils
const createCategory = require("./utils/createCategory");
const listCategories = require("./utils/listCategories");
const savePassword = require("./utils/savePassword");

program.version("1.0.0").description("Password Manager");

program
  .option("-d, --debug", "Output extra debugging")
  .option("-c, --category <category...>", "Create Category")
  .option("-s, --save [credentials...]", "Save a credential", [])
  .option("-l, --list", "List all categories")
  .parse();

const { category, list, save } = program.opts();

// list categories
if (list) {
  listCategories();
}

// create Category
if (category) {
  createCategory(category);
}

// save credentials
if (save.length > 0) {
  savePassword(save);
}
