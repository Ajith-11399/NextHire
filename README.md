# 📌 NextHire – Seamless Job Portal 🚀

**NextHire – Connecting Talent with Opportunity**

NextHire is a full-stack job portal designed to simplify the hiring process for both job seekers and recruiters. With secure authentication, role-based access, and a modern UI, NextHire makes job searching and hiring efficient and seamless.

---

## 🚀 Live Demo

🔗 [Try NextHire Now](https://nexthire-aj.vercel.app/)  
*(Replace with your actual Vercel deployment link)*

---

## 🔑 Key Features

- 🔐 **Secure Role-Based Login**  
  - Users sign in via **Clerk authentication**.  
  - Recruiters sign in via **custom JWT authentication**.  
  - Ensures **secure access control** and **role-based permissions**.

- ⚡ **Streamlined Applications**  
  Apply, track, and manage job applications effortlessly with **one-click functionality**.

- 🗂️ **Recruiter Dashboard**  
  Create, manage, and control job posts while efficiently reviewing applications.

- 📂 **Efficient File Management**  
  Securely upload and manage resumes with **cloud storage** for a smooth user experience.

- 🚀 **Reliable & Scalable Platform**  
  Built with modern technologies to deliver **high performance**, **robust security**, and **seamless experience** for all users.

- 🛡️ **Real-Time Error Monitoring**  
  Integrated with **Sentry** to detect, diagnose, and fix issues quickly, ensuring **app reliability**.

---

## 🛠️ Tech Stack

| Category                  | Tools Used                                      |
|----------------------------|------------------------------------------------|
| Frontend                  | [React](https://react.dev/), [Vite](https://vitejs.dev/), [TailwindCSS](https://tailwindcss.com/), React Router, Quill, Swiper |
| Backend                   | [Express.js](https://expressjs.com/), [MongoDB](https://www.mongodb.com/), Mongoose, Multer, Cloudinary |
| Authentication & Security | Clerk (users), JWT & custom auth (recruiters), Bcrypt |
| Utilities & Monitoring    | Axios, Moment.js, Sentry, Nodemon |
| Deployment                | [Vercel](https://vercel.com/)                  |
| Version Control           | [GitHub](https://github.com/)                  |

**Key Highlights:** Modern full-stack stack for **fast, secure, and scalable applications**.

---

## 📁 Project Structure

```bash
nexthire/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── Main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
├── README.md
└── .gitignore
