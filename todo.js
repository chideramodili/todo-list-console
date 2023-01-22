alert("welcome to your todo list for the day");
function check() {
  let list = [];
  let toDo = prompt("what would you like to add to your list?");
  list.push({ item: toDo, isDone: false });

  let sure = confirm("wuold you like to add more things to your list?");
  if (sure) {
    return addTodo();
  }
  function addTodo() {
    let add = prompt("what else would you like to add to your todo list");
    list.push({
      item: add,
      isDone: false
    });

    let clarification = confirm(
      "would you like to add more things to your list?"
    );
    if (clarification) {
      return addTodo();
    } else {
      console.log(list);
    }
  }
}
check();
