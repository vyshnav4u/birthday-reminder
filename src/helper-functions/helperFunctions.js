// get age from given dob
export const getAge = (dob) => {
  let today = new Date();
  let dobStd = new Date(dob);
  let age = today.getFullYear() - dobStd.getFullYear();
  let monthDiffrence = today.getMonth() - dobStd.getMonth();
  if (
    monthDiffrence < 0 ||
    (monthDiffrence === 0 && today.getDate() < dobStd.getDate())
  ) {
    age--;
  }
  return age;
};

// sorts today date from given date
export const getTodayBirthday = (personData) => {
  const todayBirthday = personData.filter((ele) => {
    const today = new Date();
    const birthDate = new Date(ele.dob);
    if (
      birthDate.getDay() === today.getDay() ||
      birthDate.getMonth() === today.getMonth()
    ) {
      return ele;
    }
  });

  return todayBirthday;
};
