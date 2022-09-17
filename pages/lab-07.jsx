import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
  IconSunHigh,
  IconMoon,
} from "@tabler/icons";
import { themes } from "../libs/themes";
import { ThemeContext } from "../contexts/ThemeContext";
import Todolist from "../components/Todolist";
import Footer from "../components/Footer";

export default function Lab07() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoStr = localStorage.getItem("save-todos");
    if (!todoStr) setTodos([]);
    else setTodos(JSON.parse(todoStr));
  }, []);

  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    saveTodos();
  }, [todos]);

  const onKeyUpHandler = (event) => {
    if (event.key !== "Enter") return;
    if (todoInput === "") alert("Todo cannot be empty");
    else {
      const newTodos = [{ title: todoInput, completed: false }, ...todos];
      setTodos(newTodos);
      setTodoInput("");
    }
  };

  const deleteTodo = (idx) => {
    todos.splice(idx, 1);
    const newTodo = [...todos];
    setTodos(newTodo);
  };

  const markTodo = (idx) => {
    todos[idx].completed = !todos[idx].completed;
    setTodos([...todos]);
  };

  const moveUp = (idx) => {
    if (idx === 0) return;
    const title = todos[idx].title;
    const completed = todos[idx].completed;

    todos[idx].title = todos[idx - 1].title;
    todos[idx].completed = todos[idx - 1].completed;

    todos[idx - 1].title = title;
    todos[idx - 1].completed = completed;
    setTodos([...todos]);
  };

  const moveDown = (idx) => {
    if (todos[idx + 1] === undefined) return;
    const title = todos[idx].title;
    const completed = todos[idx].completed;

    todos[idx].title = todos[idx + 1].title;
    todos[idx].completed = todos[idx + 1].completed;

    todos[idx + 1].title = title;
    todos[idx + 1].completed = completed;
    setTodos([...todos]);
  };

  const saveTodos = () => {
    const todosStr = JSON.stringify(todos);
    localStorage.setItem("save-todos", todosStr);
  };

  const [selTheme, setSelTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (selTheme.name == "light") setSelTheme(themes.dark);
    else setSelTheme(themes.light);
  };
  return (
    <MainLayout>
      <div
        style={{
          backgroundColor: selTheme.background,
          minHeight: "600px",
        }}
      >
        {/* Entire App container (required for centering) */}
        <div
          /*style={{ backgroundColor: selTheme.background, maxWidth: "700px" }}*/ className="mx-auto"
        >
          {/* App header */}
          <p
            className="display-4 text-center fst-italic m-4"
            style={{ color: selTheme.foreground }}
          >
            Minimal Todo List <span className="fst-normal">☑️</span>
          </p>
          {/* Input */}
          <div className="d-flex align-items-center gap-2">
            <input
              className="form-control mb-1 fs-4"
              placeholder="insert todo here..."
              onChange={(event) => {
                setTodoInput(event.target.value);
              }}
              value={todoInput}
              onKeyUp={onKeyUpHandler}
            />
            <button className="btn btn-dark" onClick={toggleTheme}>
              {selTheme.name === "light" && <IconSunHigh />}
              {selTheme.name === "dark" && <IconMoon />}
            </button>
          </div>

          {/* Todos */}
          <ThemeContext.Provider value={{ selTheme }}>
            {todos.map((todo, i) => (
              <Todolist
                title={todo.title}
                completed={todo.completed}
                key={i}
                onDelete={() => deleteTodo(i)}
                onMark={() => markTodo(i)}
                onMoveUp={() => moveUp(i)}
                onMoveDown={() => moveDown(i)}
              />
            ))}
          </ThemeContext.Provider>

          {/* summary section */}
          <p className="text-center fs-4">
            <span className="text-primary">All ({todos.length}) </span>
            <span className="text-warning">
              Pending ({todos.filter((x) => x.completed === false).length}){" "}
            </span>
            <span className="text-success">
              Completed ({todos.filter((x) => x.completed === true).length})
            </span>
          </p>
          {todos.title}

          {/* Made by section */}
          <p className="text-center mt-3 text-muted fst-italic">
            made by Chawanluck Kaewmool 620610783
          </p>
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
}
