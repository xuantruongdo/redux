export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchFilter = (data) => {
  return {
    type: "todoList/search",
    payload: data,
  };
};
