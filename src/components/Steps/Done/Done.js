import classes from "./Done.module.scss";

const Done = ({ firstStepInfo, secondStepInfo, activeIndex }) => {
    console.log(firstStepInfo)
    console.log(secondStepInfo)
  return (
    <table
      style={{ display: activeIndex === 3 ? "block" : "none" }}
      className={`${classes.table}`}
    >
      <tbody>
        <tr className={classes.tr}>
          <th className={classes.th} scope="row">
            First Name
          </th>
          <td className={classes.td}>{firstStepInfo.firstName}</td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th} scope="row">
            Last Name
          </th>
          <td className={classes.td}>{firstStepInfo.lastName}</td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th} scope="row">
            User Name
          </th>
          <td className={classes.td}>{firstStepInfo.userName}</td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th} scope="row">
            Phone Number
          </th>
          <td className={classes.td}>{secondStepInfo.phoneNumber}</td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th} scope="row">
            Website
          </th>
          <td className={classes.td}>{secondStepInfo.website}</td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th} scope="row">
            Adderss
          </th>
          <td className={classes.td}>{secondStepInfo.address}</td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th} scope="row">
            Gender
          </th>
          <td className={classes.td}>{secondStepInfo.gender}</td>
        </tr>
        <tr className={classes.tr}>
          <th className={classes.th} scope="row">
            Country
          </th>
          <td className={classes.td}>{secondStepInfo.country}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Done;
