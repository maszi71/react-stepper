import classes from "./SecondStep.module.scss";
import { useForm } from "react-hook-form";

const SecondStep = ({
  OnUpdateActiveStep,
  onGetSecondStepInfo,
  secondStepInfo,
  activeIndex,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (submittedForm) => {
    console.log("generalInfo", submittedForm);
    onGetSecondStepInfo(submittedForm);
    OnUpdateActiveStep(2);
  };

  return (
    <form
      style={{ display: activeIndex === 2 ? "block" : "none" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="row">
        <div className=" col-12"></div>
        <div className=" col-12 "></div>
        <div className=" col-12 "></div>
        <div className="col-12"></div>
        <div className="col-12"></div>
      </div>
      <div className="text-end">
        <button className={`btn ${classes.submit}`} type="submit">
          Continue
        </button>
      </div>
    </form>
  );
};

export default SecondStep;
