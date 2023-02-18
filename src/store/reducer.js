const initState = {
  filters: {
    search: "",
    status: "All",
    priority: "",
  },
  todoList: [
    {
      id: 1,
      name: "Learn Yoga",
      completed: false,
      priority: "Medium",
    },
    {
      id: 2,
      name: "Learn Redux",
      completed: false,
      priority: "High",
    },
    {
      id: 3,
      name: "Learn JS",
      completed: true,
      priority: "Low",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case "todoList/search":
      return {
        ...state,
        filters: {
          search: action.payload,
        },
      };

    default: return state
  }
};

export default rootReducer