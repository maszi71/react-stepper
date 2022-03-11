import classes from "./SecondStep.module.scss";
import { useForm } from "react-hook-form";
import SimpleInput from "../../SimpleInput/SimpleInput";

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
        <div className=" col-12">
          <SimpleInput
            validation={{
              required: true,
            }}
            input={{
              type: "text",
              label: "Phone Number*",
              name: "phoneNumber",
              placeholder: "Phone Number",
              id: "phoneNumber",
              autoComplete: "off",
            }}
            errors={errors}
            register={register}
          />
        </div>
        <div className=" col-12 ">
          <SimpleInput
            validation={{
              pattern: {
                value:
                  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
                message: "Please enter a valid url",
              },
            }}
            input={{
              type: "text",
              label: "Website",
              name: "website",
              placeholder: "Website",
              id: "Website",
              autoComplete: "off",
            }}
            errors={errors}
            register={register}
          />
        </div>
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
