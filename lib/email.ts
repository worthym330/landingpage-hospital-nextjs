import nodemailer from 'nodemailer';

interface EmailData {
    name: string;
    phone: string;
    service: string;
    message: string;
}

export async function sendEmail(data: EmailData) {
    // Create transporter
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '465'),
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    // Service name mapping
    const serviceNames: { [key: string]: string } = {
        xray: 'Digital X-Ray',
        ct: 'CT Scan',
        mri: 'MRI',
        ultrasound: 'Ultrasound',
        ecg: 'ECG',
        pathology: 'Pathology Lab',
    };

    const serviceName = serviceNames[data.service] || data.service;

    // Email HTML template
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9fafb;
        }
        .header {
          background: linear-gradient(135deg, #8B2635 0%, #C44556 100%);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .content {
          background: white;
          padding: 30px;
          border-radius: 0 0 10px 10px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .field {
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e5e7eb;
        }
        .label {
          font-weight: bold;
          color: #8B2635;
          margin-bottom: 5px;
        }
        .value {
          color: #4b5563;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          padding: 20px;
          color: #6b7280;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">New Appointment Request</h1>
          <p style="margin: 10px 0 0 0;">Manmohan Imaging Center</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Full Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Phone Number:</div>
            <div class="value">${data.phone}</div>
          </div>
          <div class="field">
            <div class="label">Service Required:</div>
            <div class="value">${serviceName}</div>
          </div>
          <div class="field" style="border-bottom: none;">
            <div class="label">Message:</div>
            <div class="value">${data.message || 'No additional message'}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the Manmohan Imaging Center website contact form.</p>
          <p>Please respond to the patient at: ${data.phone}</p>
        </div>
      </div>
    </body>
    </html>
  `;

    // Plain text version
    const textContent = `
New Appointment Request - Manmohan Imaging Center

Full Name: ${data.name}
Phone Number: ${data.phone}
Service Required: ${serviceName}
Message: ${data.message || 'No additional message'}

---
This email was sent from the Manmohan Imaging Center website contact form.
Please respond to the patient at: ${data.phone}
  `;

    // Send email
    const info = await transporter.sendMail({
        from: `"Manmohan Imaging Center" <${process.env.SMTP_USER}>`,
        to: process.env.TO_EMAIL,
        subject: `New Appointment Request - ${serviceName}`,
        text: textContent,
        html: htmlContent,
    });

    return info;
}
