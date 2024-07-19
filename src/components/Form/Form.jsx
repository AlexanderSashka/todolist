import { useState } from "react";
import styles from "./Form.module.scss";
import PropTypes from "prop-types"; // Импорт prop-types

const Form = (props) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    props.putTodo(value);
    setValue("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitForm}>
      <input className={styles.input} type="text" value={value} onChange={handleInputChange} placeholder="Entered task" />
      <button type="submit" className={styles.buttonAdd}>
        Add task
      </button>
    </form>
  );
};

Form.propTypes = {
  putTodo: PropTypes.func.isRequired,
};

export default Form;
