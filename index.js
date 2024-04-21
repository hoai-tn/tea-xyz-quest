function parseDatetime(datetimeString) {
  const parsedDate = new Date(datetimeString);
  if (isNaN(parsedDate.getTime())) {
    throw new Error('Invalid datetime string');
  }
  return parsedDate;
}

module.exports = parseDatetime;