// ─────────────────────────────────────────────
//  Portfolio Contact Server
//  Node.js + Express + Nodemailer
//  Suporta: Gmail SMTP  ou  Resend SMTP
// ─────────────────────────────────────────────

const express    = require('express');
const nodemailer = require('nodemailer');
const cors       = require('cors');
const path       = require('path');
require('dotenv').config();

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve o portfolio estático
app.use(express.static(path.join(__dirname, 'public')));

// CORS — permite apenas seu domínio em produção
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || '*'
}));

// ── Configuração do transporter ──────────────
// Troque EMAIL_PROVIDER=gmail  ou  EMAIL_PROVIDER=resend no .env
const isResend = process.env.EMAIL_PROVIDER === 'resend';

const transporter = nodemailer.createTransport(
  isResend
    ? {
        host: 'smtp.resend.com',
        port: 465,
        secure: true,
        auth: {
          user: 'resend',
          pass: process.env.RESEND_API_KEY,   // re_xxxxxxxxxxxx
        },
      }
    : {
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,       // seuemail@gmail.com
          pass: process.env.GMAIL_APP_PASS,   // senha de app (16 chars)
        },
      }
);

// ── Health check ─────────────────────────────
app.get("/health", (req, res) => res.json({ ok: true }));

// ── Rota de contato ──────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, company, email, type, message } = req.body;

  // Validação básica
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Campos obrigatórios em falta.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ ok: false, error: 'E-mail inválido.' });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.FROM_EMAIL}>`,
      to:   process.env.TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${type || 'Contato'} — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;border:1px solid #e0e7ff;border-radius:8px;overflow:hidden">
          <div style="background:#1B4FD8;padding:24px 32px">
            <h2 style="color:#fff;margin:0;font-size:18px">Nova mensagem do portfólio</h2>
          </div>
          <div style="padding:32px;background:#fff">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#6b7280;width:110px">Nome</td><td style="padding:8px 0;font-weight:600;color:#0F1C33">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280">Empresa</td><td style="padding:8px 0;color:#0F1C33">${company || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280">E-mail</td><td style="padding:8px 0;color:#1B4FD8">${email}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280">Tipo</td><td style="padding:8px 0;color:#0F1C33">${type || '—'}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0">
            <p style="color:#6b7280;font-size:13px;margin:0 0 8px">Mensagem</p>
            <p style="color:#0F1C33;font-size:15px;line-height:1.7;margin:0">${message.replace(/\n/g,'<br>')}</p>
          </div>
          <div style="padding:16px 32px;background:#f8fafc;font-size:12px;color:#9ca3af">
            Enviado via portfólio — Responda directamente para ${email}
          </div>
        </div>
      `,
    });

    res.json({ ok: true, message: 'Mensagem enviada com sucesso!' });
  } catch (err) {
    console.error('[email error]', err.message);
    res.status(500).json({ ok: false, error: 'Erro ao enviar. Tente novamente.' });
  }
});

// Fallback — serve index.html para qualquer rota
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✓ Server running on port ${PORT}`);
  console.log(`✓ Email provider: ${isResend ? 'Resend' : 'Gmail'}`);
});