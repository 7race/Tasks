const removeDuplicates = (str) => Array.from(new Set(str.split(","))).join(",");

const removeAllDuplicates = (str) =>
  str
    .split(",")
    .filter((v, _, a) => (a.indexOf(v) === a.lastIndexOf(v) ? v : false))
    .join(",");
