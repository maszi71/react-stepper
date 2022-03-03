import classes from "./StepTitle.module.scss";

const StepTitle = ({ index, activeIndex, title }) => {
  return (
    <div
      style={{ borderColor: activeIndex >= index ? "#204B90" : "#C4C4C4" }}
      className={classes["step-title-box"]}
    >
      <span style={{ color: activeIndex >= index ? "#204B90" : "#C4C4C4" }}>
        {title}
      </span>
    </div>
  );
};

export default StepTitle;
