export const getDateString = () => {
  const date = new Date();
  return `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일(${getDayString(
    date.getDay()
  )})`;
};

const getDayString = (index: number) => {
  const dayArr = ["일", "월", "화", "수", "목", "금", "토", "일"];
  return dayArr[index];
};
