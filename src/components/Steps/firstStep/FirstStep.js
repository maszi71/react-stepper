import classes from "./FirstStep.module.scss";
import { useForm } from "react-hook-form";
import SimpleInput from "../../SimpleInput/SimpleInput";

const FirstStep = ({
  OnUpdateActiveStep,
  onGetGeneralInfo,
  generalInfo,
  activeIndex,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    defaultValues: generalInfo
      ? {
          companyName: generalInfo["companyName"],
          companyIntroduction: generalInfo["companyIntroduction"],
          serviceDescription: generalInfo["serviceDescription"],
          companySize: generalInfo["companySize"],
          lifeScienceSector: generalInfo["lifeScienceSector"],
          profilePicture: generalInfo["profilePicture"],
          attachFiles: generalInfo["attachFiles"],
        }
      : {},
  });

  const onSubmit = (submittedForm) => {
    console.log("generalInfo", submittedForm);
    onGetGeneralInfo(submittedForm);
    OnUpdateActiveStep(2);
  };

  return (
    <form
      style={{ display: activeIndex === 1 ? "block" : "none" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="row">
        <div className="col-md-6 col-12">
          <SimpleInput
            validation={{
              required: true,
            }}
            input={{
              type: "text",
              label: "First Name",
              name: "firstName",
              placeholder: "First Name",
              id: "firstName",
              autoComplete: "off",
            }}
            errors={errors}
            register={register}
          />
        </div>
        <div className="col-md-6 col-12 ">
          <SimpleInput
            validation={{
              required: true,
            }}
            input={{
              type: "text",
              label: "Last Name",
              name: "lastName",
              placeholder: "Last Name",
              id: "lastName",
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
