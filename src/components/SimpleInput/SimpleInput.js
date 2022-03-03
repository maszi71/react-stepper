import classes from "./SimpleInput.module.scss";
import ReactTooltip from "react-tooltip";

const SimpleInput = ({ validation, input, errors, register }) => {
  return (
    <div className={classes["single-input-box"]}>
      <input
        style={{ borderColor: errors[input.name] ? "#E10000" : "" }}
        className={classes["single-input"]}
        {...input}
        {...register(input.name, validation)}
      />

      <label
        style={{ color: errors[input.name] ? "#E10000" : "" }}
        htmlFor={input.name}
        className={classes["single-input-label"]}
      >
        {input.label}{" "}
        {input.id === "setPassword" && (
          <span data-tip>
            {" "}
            <i className={`fas fa-info-circle ${classes.info}`}></i>
          </span>
        )}
      </label>
      {errors[input.name] && errors[input.name].type === "required" && (
        <span className={classes["single-input-error"]}>This is required</span>
      )}
      {errors[input.name] && errors[input.name].message && (
        <span className={classes["single-input-error"]}>
          {" "}
          {errors[input.name].message}
        </span>
      )}
      {input.id === "setPassword" && (
        <ReactTooltip
          arrowColor="#369CBB"
          className={classes.toopltip}
          effect="solid"
          place="right"
        >
          1. Your password must contain at least 8 characters.
          <br /> 2. Your password must contain at least 1 upper case letter.{" "}
          <br />
          3. Your password must contain at least 1 number. <br /> 4. Your
          password must include at least one special character, e.g., ! @ # ? ]
          Note: do not use &lt;or&gt; in your password, as both can cause
          problems in your web browser.
        </ReactTooltip>
      )}
    </div>
  );
};

export default SimpleInput;
