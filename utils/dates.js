export const getFormattedDate = () => {
  var date = new Date();
  var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "-" +  date.getHours() + "-" + date.getMinutes()
  return str;
}
