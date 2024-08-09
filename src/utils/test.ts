import dayjs from "dayjs";

export const getDate = (date: string) => {
  return dayjs(date).format("YYYY-MM-DD");
};
