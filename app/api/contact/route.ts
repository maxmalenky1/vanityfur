import { NextResponse } from 'next/server'

// Twilio credentials - set these in your environment variables
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER
const OWNER_PHONE_NUMBER = process.env.OWNER_PHONE_NUMBER || '+17708878880' // Vanity Fur phone

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, petName, petType, service, preferredDate, preferredTime, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format the SMS message
    const smsMessage = `
NEW CONTACT FORM SUBMISSION
---------------------------
Name: ${name}
Phone: ${phone}
Email: ${email}
${petName ? `Pet: ${petName} (${petType || 'Not specified'})` : ''}
${service ? `Service: ${service}` : ''}
${preferredDate ? `Preferred Date: ${preferredDate}` : ''}
${preferredTime ? `Preferred Time: ${preferredTime}` : ''}

Message: ${message}

Reply directly to this number to contact the customer: ${phone}
`.trim()

    // Check if Twilio is configured
    if (TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN && TWILIO_PHONE_NUMBER) {
      // Send SMS via Twilio
      const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`
      
      const twilioResponse = await fetch(twilioUrl, {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          To: OWNER_PHONE_NUMBER,
          From: TWILIO_PHONE_NUMBER,
          Body: smsMessage,
        }),
      })

      if (!twilioResponse.ok) {
        const errorData = await twilioResponse.json()
        console.error('Twilio error:', errorData)
        // Still return success to user, but log the error
        return NextResponse.json({ 
          success: true, 
          message: 'Your message has been received. We will contact you soon!',
          smsStatus: 'pending'
        })
      }

      return NextResponse.json({ 
        success: true, 
        message: 'Your message has been sent! We will text you back shortly.',
        smsStatus: 'sent'
      })
    }

    // If Twilio is not configured, just log and return success
    console.log('Contact form submission (SMS not configured):')
    console.log(smsMessage)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Your message has been received. We will contact you soon!',
      smsStatus: 'not_configured'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    )
  }
}
