import { FormEvent, useState } from "react";
import styles from './MyForm.module.scss';

/**
 * Returns an array where the duplicates in-place such that each unique string appears only once.
 * The relative order of the strings from the original array should be kept the same.
 * This function is not case sensitive!!!!
 * @param array Original array with duplicated values
 */
const removeDuplicateFromArray = (array: string[]) => [...new Set(array)];

const MyForm = () => {
  // The input's default value also can be set when the component will mount by using the useEffect hook.
  // useEffect(() => setInputValue("chicken"), []);
  const [inputValue, setInputValue] = useState("chicken");
  const [list, setList] = useState<string[]>([]);
  const [nonDuplicatedValues, setNonDuplicatedValues] = useState("");
  const handleOnAddFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setList(prevListValue => [...prevListValue, inputValue]);
    setInputValue("");
  };
  const handleSubmitButton = () => {
    setNonDuplicatedValues(removeDuplicateFromArray(list).join(','));
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleOnAddFormSubmit} className={styles.form}>
        <input
          placeholder="Add some text here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul className={styles.list}>
        {list.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <button onClick={handleSubmitButton}>Submit</button>
      <p>
        <b>{nonDuplicatedValues}</b>
      </p>
    </div>
  );
};

export default MyForm;