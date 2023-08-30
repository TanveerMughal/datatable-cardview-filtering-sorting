export function customSort(a: any, b: any) {
  // Extract the letters and numbers from the strings
  const [aLetters, aNumbers] = a.match(/[a-zA-Z]+|\d+/g);
  const [bLetters, bNumbers] = b.match(/[a-zA-Z]+|\d+/g);

  if (aLetters !== bLetters) {
    return aLetters.localeCompare(bLetters);
  }

  return parseInt(aNumbers) - parseInt(bNumbers);
}
