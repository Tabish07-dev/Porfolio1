# Portfolio Website

**Developer:** Tabish Ali Soomro  
**GitHub:** [https://github.com/Tabish07-dev/Porfolio1](https://github.com/Tabish07-dev/Porfolio1)  
**Live Demo (Vercel):** *Add your Vercel link here once deployed*

---

## Project Description

This is a modern, responsive **Portfolio Website** built with **Next.js**, **Tailwind CSS**, and **NodeMailer** for the contact form.  
It showcases my **projects, skills, and provides a contact form** to reach me directly via email.

---

## Features

- **Responsive Design:** Works perfectly on mobile, tablet, and desktop.
- **Projects Section:** Displays all completed projects with images and descriptions.
- **Contact Form:** Users can send messages directly to my email using **NodeMailer**.
- **Lightweight & Fast:** Optimized using Next.js and Tailwind CSS.

---

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend (for contact form):** NodeMailer
- **Deployment:** Vercel
- **Version Control:** GitHub

---

## Setup Instructions (Local)

1. Clone the repository:

```bash
git clone https://github.com/Tabish07-dev/Porfolio1.git
cd Porfolio1
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add your email credentials:

env
Copy code
EMAIL=your_email@example.com
PASSWORD=your_email_password_or_app_password
Note: Use an App Password if using Gmail or secure email service.

Run the project locally:

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser.

Deployment on Vercel
Push your code to GitHub (without .env file for security).

Go to Vercel Dashboard and import your repository.

Add the Environment Variables in Vercel:

EMAIL = your email

PASSWORD = your email password or app password

Deploy the project.

Your live portfolio is ready! The contact form will work using NodeMailer.
