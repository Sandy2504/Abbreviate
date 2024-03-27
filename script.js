function abbrevName(name) {
  name = name.toUpperCase();
  const parts = name.split(" ");
  let firstNameInitial = parts[0][0];
  let lastNameInitial = parts[1][0];

  return firstNameInitial + "." + lastNameInitial;
}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName("Evan Cole"));
console.log(abbrevName("P Favuzzi"));
