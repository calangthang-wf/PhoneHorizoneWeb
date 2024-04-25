import bcrypt from "bcrypt";
//handlde hash password
export const hashPassword = async (password) => {
  try {
    const saltRounds = 10; // so lan ma hoa duoc thuc hien
    const hashedPassword = await bcrypt.hash(password, saltRounds); // tao ra ham bam lay mk bam vua duoc ma hoa
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};
// de so sanh ham bam duoc luu tru va mk vua duoc nhap vao 
export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
