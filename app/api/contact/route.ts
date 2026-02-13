import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, phone, service, message } = body;

        // Validation
        if (!name || !phone || !service) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate phone number (basic validation)
        const phoneRegex = /^[0-9+\-\s()]+$/;
        if (!phoneRegex.test(phone)) {
            return NextResponse.json(
                { error: 'Invalid phone number format' },
                { status: 400 }
            );
        }

        // Validate name (basic validation)
        if (name.trim().length < 2) {
            return NextResponse.json(
                { error: 'Name must be at least 2 characters' },
                { status: 400 }
            );
        }

        // Send email
        await sendEmail({
            name: name.trim(),
            phone: phone.trim(),
            service,
            message: message?.trim() || '',
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Email sent successfully'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error sending email:', error);

        return NextResponse.json(
            {
                error: 'Failed to send email. Please try again later.',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
