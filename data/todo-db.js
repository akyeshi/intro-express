const todos = [
  { todo: "Feed Dogs", done: true },
  { todo: "Learn Express", done: true },
  { todo: "Buy Milk", done: false },
];

module.exports = {
  getAll: function () {
    return todos;
  },
};
