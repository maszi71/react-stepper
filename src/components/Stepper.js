import { useState } from "react";
import classes from "./Stepper.module.scss";
import StepTitle from "./StepTitle/StepTitle";
import Card from "./Card/Card";
import InitialStep from "./Steps/InitialStep/IntialStep";
import SecondStep from "./Steps/SecondStep/SecondStep";
import Done from "./Steps/Done/Done";

const Stepper = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [firstStepInfo, setFirstStepInfo] = useState(null);
  const [secondStepInfo, setSecondStepInfo] = useState(null);

  const UpdateActiveStep = (index) => {
    setActiveIndex(index);
  };

  const getFirstStepInfo = (info) => {
    setFirstStepInfo(info);
  };
  const getSecondStepInfo = (info) => {
    setSecondStepInfo(info);
  };
  return (
    <section className={classes.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <Card className={classes["title-card"]}>
              <StepTitle index="1" activeIndex={activeIndex} title="Step 1" />
              <div
                style={{ background: activeIndex > 1 ? "#255F7A" : "#C4C4C4" }}
                className={classes.line}
              ></div>
              <StepTitle index="2" activeIndex={activeIndex} title="Step 2" />
              <div
                style={{ background: activeIndex > 2 ? "#255F7A" : "#C4C4C4" }}
                className={classes.line}
              ></div>
              <StepTitle index="3" activeIndex={activeIndex} title="Done" />
            </Card>
          </div>
          <div className="col-xl-8">
            <Card className={classes["step-card"]}>
              <InitialStep
                OnUpdateActiveStep={UpdateActiveStep}
                onGetFirstStepInfo={getFirstStepInfo}
                firstStepInfo={firstStepInfo}
                activeIndex={activeIndex}
              />
              <SecondStep
                OnUpdateActiveStep={UpdateActiveStep}
                onGetSecondStepInfo={getSecondStepInfo}
                secondStepInfo={secondStepInfo}
                activeIndex={activeIndex}
              />
              {firstStepInfo && secondStepInfo && (
                <Done
                  OnUpdateActiveStep={UpdateActiveStep}
                  firstStepInfo={firstStepInfo}
                  secondStepInfo={secondStepInfo}
                  activeIndex={activeIndex}
                />
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stepper;
