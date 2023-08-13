import React, { useContext, useState } from "react";
import { TodoContext } from "../..//context/todoContext/todoContext";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./todo.scss";
const TodoList = ({ todos, onComplete, onDelete, buttonText }) => {
  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <span className="btn">
            <button
              className="complete button"
              onClick={() => onComplete(todo.id)}
            >
              {buttonText}
            </button>
            <button className="delete button" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

const AddTodo = () => {
  const { dispatch } = useContext(TodoContext);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="addTodo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

const Todo = () => {
  const {
    state: { todos, completedTodos },
    dispatch,
  } = useContext(TodoContext);

  const handleComplete = (id) => {
    dispatch({ type: "COMPLETE_TODO", payload: id });
  };

  const handleIncomplete = (id) => {
    dispatch({ type: "INCOMPLETE_TODO", payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <div className="Todo">
      <Navbar />
      <h1>Todo App</h1>
      <AddTodo />
      <h2>Todos</h2>
      <TodoList
        todos={todos}
        onComplete={handleComplete}
        onDelete={handleDelete}
        buttonText="Complete"
      />
      <h2>Completed Todos</h2>
      <TodoList
        todos={completedTodos}
        onComplete={handleIncomplete}
        onDelete={handleDelete}
        buttonText="Incomplete"
      />
      <div className="todoInfo">
        <p>completed Todo: {completedTodos.length}</p>
        <p>Incompleted Todo: {todos.length}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Todo;
