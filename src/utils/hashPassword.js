import bcrypt from "bcrypt";

const testPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

testPassword(88774401).then(console.log());
