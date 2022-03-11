import classes from "./SimpleDropDownInput.module.scss";
import { useState, useCallback, useEffect } from "react";

const SimpleDropDownInput = ({
  validation,
  input,
  errors,
  register,
  setValue,
  getValues,
  dropDownList,
}) => {
  const [inputTitle, setInputTitle] = useState(input.label);

  const changeInputTitle = useCallback(
    (item) => {
      const result = dropDownList.find(({ id }) => id === item);
      setInputTitle(result.title);
    },
    [dropDownList]
  );

  const getFilterItem = (item) => {
    setValue(input.name, item);
    changeInputTitle(item);
  };

  useEffect(() => {
    const item = getValues(input.name);
    if (item) {
      changeInputTitle(item);
    }
  }, [changeInputTitle, getValues, input]);

  return (
    <div className={`dropdown ${classes.dropdown}`}>
      <input {...input} {...register(input.name, validation)} hidden />

      <button
        style={{
          borderColor:
            errors[input.name] && !getValues(input.name) ? "#E10000" : "",
        }}
        className={`btn dropdown-toggle ${classes["dropdown-button"]}`}
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>{inputTitle}</span>
      </button>
      <ul
        className={`dropdown-menu ${classes.menus}`}
        aria-labelledby="dropdownMenuButton1"
      >
        {dropDownList.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={`dropdown-item ${classes.items}`}
              onClick={() => getFilterItem(item.id)}
            >
              <span>{item.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleDropDownInput;
