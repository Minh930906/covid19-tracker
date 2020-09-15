export const sortData = (data) => {
  //cont sortedData = [...Data]
  return data.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};
