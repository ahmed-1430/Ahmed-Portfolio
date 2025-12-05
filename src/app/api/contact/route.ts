import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, 
      // Gmail requires sender = your real email
      replyTo: email, // user email goes here
      to: process.env.EMAIL_USER,
      subject: `New Message From ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
`,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Nodemailer Error:", err);
    return Response.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}
