import classes from "./SecondStep.module.scss";
import { useForm } from "react-hook-form";
import SimpleInput from "../../SimpleInput/SimpleInput";
import SimpleDropDownInput from "../../SimpleDropDownInput/SimpleDropDownInput";
import { GENDERS } from "../../../constants/Gender";
import { COUNTRIES } from "../../../constants/Countries";

const SecondStep = ({
  OnUpdateActiveStep,
  onGetSecondStepInfo,
  secondStepInfo,
  activeIndex,
}) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: secondStepInfo
      ? {
          phoneNumber: secondStepInfo["phoneNumber"],
          website: secondStepInfo["website"],
          address: secondStepInfo["address"],
          gender: secondStepInfo["gender"],
          country: secondStepInfo["country"],
        }
      : {},
  });

  const onSubmit = (submittedForm) => {
    console.log("generalInfo", submittedForm);
    onGetSecondStepInfo(submittedForm);
    OnUpdateActiveStep(3);
  };
  const backButton = () => {
    OnUpdateActiveStep(1);
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
              required: true,
              pattern: {
                value:
                  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
                message: "Please enter a valid url",
              },
            }}
            input={{
              type: "text",
              label: "Website*",
              name: "website",
              placeholder: "Website",
              id: "Website",
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
            }}
            input={{
              type: "text",
              label: "Address*",
              name: "address",
              placeholder: "address",
              id: "Address",
              autoComplete: "off",
            }}
            errors={errors}
            register={register}
          />
        </div>
        <div className=" col-12 h-70">
          <SimpleDropDownInput
            validation={{
              required: true,
            }}
            input={{
              type: "text",
              label: "Gender",
              name: "gender",
            }}
            errors={errors}
            register={register}
            setValue={setValue}
            getValues={getValues}
            dropDownList={GENDERS}
          />
        </div>
        <div className="col-12 h-70">
          <SimpleDropDownInput
            validation={{
              required: true,
            }}
            input={{
              type: "text",
              label: "Country*",
              name: "country",
            }}
            errors={errors}
            register={register}
            setValue={setValue}
            getValues={getValues}
            dropDownList={COUNTRIES}
          />
        </div>
      </div>
      <div className="col-12 d-flex justify-content-between">
        <button
          onClick={backButton}
          className={`btn ${classes.back}`}
          type="button"
        >
          Back
        </button>
        <button className={`btn ${classes.submit}`} type="submit">
          Continue
        </button>
      </div>
    </form>
  );
};

export default SecondStep;
