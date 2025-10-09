import nodemailer from "nodemailer";

export const runtime = "nodejs"; // ensure Node.js runtime (not edge)
export const dynamic = "force-dynamic"; // disable static caching for this route

// Hardcoded SMTP + routing configuration
const EMAIL_CONFIG = {
  credentials: {
    host: "mail.smtp2go.com",
    username: "mahmoud15750",
    password: "CX06ayFWhQJFdzLU",
    ports: [2525, 587, 8025, 25, 80, 465, 8465, 443], // TLS on non-SSL; SSL on 465/8465/443
  },
  routing: {
    to: "support@lead2performance.com",
    from: "support@lead2performance.com",
  },
};

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name = "",
      company = "",
      email = "",
      phone = "",
      service = "",
      budget = "",
      area = "",
      message = "",
    } = body || {};

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 }
      );
    }

    const { host, username, password, ports } = EMAIL_CONFIG.credentials;
    const user = username;
    const pass = password;

    const toAddress = EMAIL_CONFIG.routing.to;
    const fromAddress = EMAIL_CONFIG.routing.from;

    const subject = `New Leadsiology Contact: ${name}${service ? ` • ${service}` : ""}`;

    const html = `
      <h2>New Contact Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Primary Service:</strong> ${service}</p>
      <p><strong>Monthly Budget:</strong> ${budget}</p>
      <p><strong>Service Area:</strong> ${area}</p>
      <p><strong>Message:</strong><br/>${(message || "").replace(/\n/g, "<br/>")}</p>
    `;

    const text = `New Contact Submission\n\nName: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nPrimary Service: ${service}\nMonthly Budget: ${budget}\nService Area: ${area}\n\nMessage:\n${message}`;

    // Try primary port first, then fall back to alternates if connection/auth fails
    const candidatePorts = Array.from(new Set(ports));

    let lastError = null;
    for (const p of candidatePorts) {
      try {
        const t = nodemailer.createTransport({
          host,
          port: p,
          secure: [465, 8465, 443].includes(p),
          auth: { user, pass },
          requireTLS: ![465, 8465, 443].includes(p),
        });
        // Optional: quick verify to fail fast on bad creds/blocked port
        await t.verify();
        await t.sendMail({
          from: `Leadsiology <${fromAddress}>`,
          to: toAddress,
          replyTo: email || undefined,
          subject,
          html,
          text,
        });
        lastError = null;
        break; // success
      } catch (err) {
        lastError = err;
        // Continue to next candidate port
      }
    }

    if (lastError) {
      console.error("SMTP send failed across all ports:", lastError);
      return Response.json(
        { error: "Email delivery failed (SMTP). Please try again later." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}


