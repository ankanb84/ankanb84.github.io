# Backend Setup Guide for Portfolio Contact Form

This guide will help you set up the backend for your portfolio contact form so you can receive emails from visitors.

## 🚀 Option 1: Formspree (Recommended - Free & Easy)

### Step 1: Sign Up
1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create a Form
1. Click "New Form"
2. Give your form a name (e.g., "Portfolio Contact")
3. Copy the form endpoint URL (looks like: `https://formspree.io/f/xqkqkqkq`)

### Step 3: Update Your HTML
Replace `your-form-id` in your `index.html` with the actual form ID:

```html
<form id="contactForm" class="contact-form" action="https://formspree.io/f/YOUR_ACTUAL_FORM_ID" method="POST">
```

### Step 4: Test
1. Submit a test message through your form
2. Check your email for the confirmation
3. Check Formspree dashboard for form submissions

**Pros:** Free, no server setup, instant emails, spam protection
**Cons:** Limited to 50 submissions/month on free plan

---

## 🔧 Option 2: Netlify Forms (Free Hosting + Forms)

### Step 1: Deploy to Netlify
1. Push your code to GitHub
2. Go to [Netlify.com](https://netlify.com)
3. Connect your GitHub repository
4. Deploy your site

### Step 2: Update HTML
Change your form to use Netlify's form handling:

```html
<form id="contactForm" class="contact-form" name="contact" netlify>
    <!-- Add hidden input for Netlify -->
    <input type="hidden" name="form-name" value="contact" />
    <!-- Rest of your form fields -->
</form>
```

### Step 3: Configure Notifications
1. Go to your Netlify dashboard
2. Navigate to Forms → Notifications
3. Add email notification with your email address

**Pros:** Free hosting + forms, unlimited submissions, spam protection
**Cons:** Requires deployment to Netlify

---

## 🐍 Option 3: Python Flask Backend (Custom Solution)

### Step 1: Create Flask App
Create a new file `app.py`:

```python
from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = Flask(__name__)
CORS(app)

# Email configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SENDER_EMAIL = "your-email@gmail.com"
SENDER_PASSWORD = "your-app-password"  # Use App Password, not regular password

@app.route('/send-email', methods=['POST'])
def send_email():
    try:
        data = request.json
        
        # Create message
        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = SENDER_EMAIL  # You'll receive the emails
        msg['Subject'] = f"New Contact Form Submission from {data.get('name', 'Unknown')}"
        
        # Email body
        body = f"""
        New contact form submission:
        
        Name: {data.get('name', 'Not provided')}
        Email: {data.get('email', 'Not provided')}
        Phone: {data.get('phone', 'Not provided')}
        Message: {data.get('message', 'Not provided')}
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.send_message(msg)
        server.quit()
        
        return jsonify({"success": True, "message": "Email sent successfully"}), 200
        
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
```

### Step 2: Install Dependencies
```bash
pip install flask flask-cors
```

### Step 3: Configure Gmail
1. Enable 2-factor authentication on your Gmail
2. Generate an App Password
3. Update the `SENDER_EMAIL` and `SENDER_PASSWORD` in the code

### Step 4: Update JavaScript
Update your form submission in `script.js`:

```javascript
// Replace the fetch call with:
const response = await fetch('http://localhost:5000/send-email', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formObject)
});
```

### Step 5: Run Backend
```bash
python app.py
```

**Pros:** Full control, custom functionality
**Cons:** Requires server setup, more complex

---

## 📧 Option 4: EmailJS (Client-Side Solution)

### Step 1: Sign Up
1. Go to [EmailJS.com](https://emailjs.com)
2. Create a free account
3. Connect your email service (Gmail, Outlook, etc.)

### Step 2: Update HTML
Add EmailJS script and update form:

```html
<!-- Add this in your <head> section -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

<!-- Update your form -->
<form id="contactForm" class="contact-form">
    <!-- Remove action and method attributes -->
    <!-- Rest of your form fields -->
</form>
```

### Step 3: Update JavaScript
Replace the form submission with EmailJS:

```javascript
// Initialize EmailJS
emailjs.init("YOUR_USER_ID");

// In your form submit handler:
const response = await emailjs.send(
    "YOUR_SERVICE_ID", 
    "YOUR_TEMPLATE_ID", 
    formObject
);
```

**Pros:** No backend needed, instant setup
**Cons:** Limited free emails, client-side processing

---

## 🎯 Recommended Setup for Beginners

1. **Start with Formspree** - It's the easiest and most reliable
2. **Move to Netlify** if you want free hosting as well
3. **Consider custom backend** only if you need specific functionality

---

## 🔒 Security Considerations

- **Never expose API keys** in client-side code
- **Use environment variables** for sensitive data
- **Implement rate limiting** to prevent spam
- **Validate inputs** on both client and server side
- **Use HTTPS** for production deployments

---

## 📱 Testing Your Setup

1. **Test locally** first
2. **Check spam folder** for test emails
3. **Verify form validation** works correctly
4. **Test on mobile devices**
5. **Check different browsers**

---

## 🚨 Troubleshooting

### Common Issues:
- **Form not sending**: Check form action URL
- **Emails not received**: Check spam folder, verify email settings
- **CORS errors**: Ensure backend allows your domain
- **Validation errors**: Check browser console for JavaScript errors

### Debug Steps:
1. Check browser console for errors
2. Verify form endpoint is correct
3. Test backend separately (if using custom solution)
4. Check email service settings
5. Verify form field names match backend expectations

---

## 📞 Support

- **Formspree**: [support@formspree.io](mailto:support@formspree.io)
- **Netlify**: [Support Documentation](https://docs.netlify.com/)
- **EmailJS**: [Support Center](https://www.emailjs.com/support/)

---

*Choose the option that best fits your technical skills and requirements. Formspree is recommended for most users as it requires no technical setup.*

