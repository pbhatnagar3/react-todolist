import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function reloadTodos() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
    {
      id:1232312312,
      text: "Be Ash Ketchum!",
      complete: true,
      edit: false,
    },
    {
      id:23123123123,
      text: "be the change that you want to see",
      complete: true,
      edit: true,
    },
  ]});
  }, 2000);
}
