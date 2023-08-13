// todoReducer.js
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload }],
      };
    }
    case "COMPLETE_TODO": {
      const todoToComplete = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (todoToComplete) {
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
          completedTodos: [todoToComplete, ...state.completedTodos],
        };
      }
      return state;
    }
    case "INCOMPLETE_TODO": {
      const todoToIncomplete = state.completedTodos.find(
        (todo) => todo.id === action.payload
      );
      if (todoToIncomplete) {
        return {
          ...state,
          completedTodos: state.completedTodos.filter(
            (todo) => todo.id !== action.payload
          ),
          todos: [todoToIncomplete, ...state.todos],
        };
      }
      return state;
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        completedTodos: state.completedTodos.filter(
          (todo) => todo.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
