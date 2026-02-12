import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json()

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Dados inválidos" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Site João Mendes" <${process.env.EMAIL_USER}>`,
      to: "mendesadvocaciaeconsultoria@hotmail.com",
      replyTo: email,
      subject: "📩 Novo contato pelo site",
      html: `
        <h2>Novo contato recebido</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Área de interesse:</strong> ${service}</p>
        <hr />
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Erro ao enviar mensagem" },
      { status: 500 }
    )
  }
}