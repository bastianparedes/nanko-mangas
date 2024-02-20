import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: Deno.env.get("email"),
    pass: Deno.env.get("emailPassword"),
  },
});

const sendMail = async (message: string) => {
  try {
    await transporter.sendMail({
      from: Deno.env.get("email"),
      to: "bastian.p@outlook.com",
      subject: `${message}`,
      text: "Mensaje desde Página Nanko Mangas",
    });
    return { success: true };
  } catch {
    return { success: false };
  }
};
export default sendMail;
