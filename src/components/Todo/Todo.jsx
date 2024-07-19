import { useEffect, useState } from "react";
import Form from "../Form/Form";
import styles from "./Todo.module.scss";
import DeleteIcon from "../../assets/image/delete.png";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [allTasks, setAllTasks] = useState(0);
  const [allComplete, setAllComplete] = useState(0);

  useEffect(() => {
    setAllComplete(todos.filter((todo) => todo.done).length);
    setAllTasks(todos.length);
  }, [todos]);

  const putTodo = (value) => {
    if (value) {
      setTodos([...todos, { id: Date.now(), text: value, done: false }]);
    } else {
      alert("Entered task");
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id !== id ? todo : { ...todo, done: !todo.done })));
  };

  const removeTask = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const clearAll = () => {
    setTodos([]);
    setAllTasks(0);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Todo</h1>
        <Form putTodo={putTodo} />
        <ul className={styles.list}>
          {todos.map((item) => (
            <li className={`${styles.item} ${item.done && styles.itemDone}`} key={item.id} onClick={() => toggleTodo(item.id)}>
              {item.text}
              <img
                className={styles.image}
                src={DeleteIcon}
                alt="icon-delete"
                onClick={(e) => {
                  e.stopPropagation();
                  removeTask(item.id);
                }}
              />
            </li>
          ))}
        </ul>
        <button className={styles.clearBtn} onClick={clearAll}>
          Clear All
        </button>
        <div className={styles.info}>
          <span>Tasks: {allTasks}</span>
          <span>Complete: {allComplete}</span>
        </div>
      </div>
    </>
  );
};

export default Todo;
