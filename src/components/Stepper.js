import { useState } from "react";
import classes from "./Stepper.module.scss";
import StepTitle from "./StepTitle/StepTitle";
import Card from "./Card/Card";
import FirstStep from "./Steps/FirstStep/FirstStep";
import SecondStep from "./Steps/SecondStep/SecondStep";

const Stepper = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [firstStepInfo, setFirstStepInfo] = useState(null);

  const UpdateActiveStep = (index) => {
    setActiveIndex(index);
  };

  const getFirstStepInfo = (info) => {
    setFirstStepInfo(info);
  };
  return (
    <section className={classes.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <Card className={classes["title-card"]}>
              <StepTitle index="1" activeIndex={activeIndex} title="Step1" />
              <div
                style={{ background: activeIndex > 1 ? "#204B90" : "#C4C4C4" }}
                className={classes.line}
              ></div>
              <StepTitle index="2" activeIndex={activeIndex} title="Step2" />
              <div
                style={{ background: activeIndex > 2 ? "#204B90" : "#C4C4C4" }}
                className={classes.line}
              ></div>
              <StepTitle index="3" activeIndex={activeIndex} title="Step3" />
            </Card>
          </div>
          <div className="col-xl-8">
            <Card className={classes["step-card"]}>
              <FirstStep
                OnUpdateActiveStep={UpdateActiveStep}
                onGetFirstStepInfo={getFirstStepInfo}
                firstStepInfo={firstStepInfo}
                activeIndex={activeIndex}
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stepper;
