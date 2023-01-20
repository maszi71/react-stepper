import classes from "./FirstStep.module.scss";
import { useForm } from "react-hook-form";
import SimpleInput from "../../SimpleInput/SimpleInput";

const FirstStep = ({
  OnUpdateActiveStep,
  onGetFirstStepInfo,
  firstStepInfo,
  activeIndex,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: firstStepInfo
      ? {
          firstName: firstStepInfo["firstName"],
          lastName: firstStepInfo["lastName"],
          userName: firstStepInfo["userName"],
          password: firstStepInfo["password"],
          confirmPassword: firstStepInfo["confirmPassword"],
        }
      : {},
  });

  const onSubmit = (submittedForm) => {
    onGetFirstStepInfo(submittedForm);
    OnUpdateActiveStep(2);
    console.log(submittedForm);
  };

  return (
    <form
      style={{ display: activeIndex === 1 ? "block" : "none" }}
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
              label: "First Name*",
              name: "firstName",
              placeholder: "First Name",
              id: "firstName",
              autoComplete: "off",
            }}
            errors={errors}
            register={register}
          />
        </div>
        <div className=" col-12 ">
          <SimpleInput
            validation={{
              required: true,
            }}
            input={{
              type: "text",
              label: "Last Name*",
              name: "lastName",
              placeholder: "Last Name",
              id: "lastName",
              autoComplete: "off",
            }}
            errors={errors}
            register={register}
          />
        </div>
        <div className=" col-12 ">
          <SimpleInput
            validation={{
              required: true,
            }}
            input={{
              type: "text",
              label: "User Name*",
              name: "userName",
              placeholder: "User Name",
              id: "UserName",
              autoComplete: "off",
            }}
            errors={errors}
            register={register}
          />
        </div>
        <div className="col-12">
          <SimpleInput
            validation={{
              required: true,
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: "Please enter a valid password",
              },
            }}
            input={{
              type: "password",
              label: "Password*",
              name: "password",
              placeholder: "Password",
              id: "setPassword",
              autoComplete: "off",
            }}
            errors={errors}
            register={register}
          />
        </div>
        <div className="col-12">
          <SimpleInput
            validation={{
              required: true,
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: "Please enter a valid password",
              },
            }}
            input={{
              type: "password",
              label: "Confirm Password*",
              name: "confirmPassword",
              placeholder: "Confirm Password",
              id: "Confirm Password",
              autoComplete: "off",
            }}
            errors={errors}
            register={register}
          />
        </div>
      </div>
      <div className="text-end">
        <button className={`btn ${classes.submit}`} type="submit">
          Continue
        </button>
      </div>
    </form>
  );
};

export default FirstStep;
