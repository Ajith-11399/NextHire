# 📌 NextHire – Seamless Job Portal 🚀

**NextHire – Connecting Talent with Opportunity**

NextHire is a modern full-stack job portal designed to bridge the gap between job seekers and recruiters. It streamlines the hiring process by providing an intuitive, secure, and fast platform where talent meets opportunity.

---

## 📑 Table of Contents

- [Live Demo](#-live-demo)
- [Key Features](#-key-features)
  - [Secure Role-Based Login](#-secure-role-based-login)
  - [Streamlined Applications](#-streamlined-applications)
  - [Recruiter Dashboard](#-recruiter-dashboard)
  - [Efficient File Management](#-efficient-file-management)
  - [Reliable &amp; Scalable Platform](#-reliable--scalable-platform)
  - [Real-Time Error Monitoring](#-real-time-error-monitoring)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Live Demo

🔗 [Try NextHire Now](https://nexthire-aj.vercel.app/)

---

## 🔑 Key Features

### 🔐 Secure Role-Based Login

- Users sign in via **Clerk authentication**.
- Recruiters sign in via **custom JWT authentication**.
- Ensures **secure access control** and **role-based permissions**.

### ⚡ Streamlined Applications

Apply, track, and manage job applications effortlessly with **one-click functionality**.

### 🗂️ Recruiter Dashboard

Create, manage, and control job posts while efficiently reviewing applications.

### 📂 Efficient File Management

Securely upload and manage resumes with **cloud storage** for a smooth user experience.

### 🚀 Reliable & Scalable Platform

Built with modern technologies to deliver **high performance**, **robust security**, and **seamless experience** for all users.

### 🛡️ Real-Time Error Monitoring

Integrated with **Sentry** to detect, diagnose, and fix issues quickly, ensuring **app reliability**.

---

## 🛠️ Tech Stack

| Category                  | Tools Used                                                                                                            |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Frontend                  | [React](https://react.dev/), [Vite](https://vitejs.dev/), [TailwindCSS](https://tailwindcss.com/), React Router, Quill, Swiper |
| Backend                   | [Express.js](https://expressjs.com/), [MongoDB](https://www.mongodb.com/), Mongoose, Multer, Cloudinary                     |
| Authentication & Security | Clerk (users), JWT & custom auth (recruiters), Bcrypt                                                                 |
| Utilities & Monitoring    | Axios, Moment.js, Sentry, Nodemon                                                                                     |
| Deployment                | [Vercel](https://vercel.com/)                                                                                            |
| Version Control           | [GitHub](https://github.com/)                                                                                            |

**Key Highlights:** Modern full-stack stack for **fast, secure, and scalable applications**.

---

## 📁 Project Structure

```bash
NextHire/
├── client/                     # Frontend
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   ├── .gitignore
│   ├── README.md
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── server/                     # Backend
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   └── vercel.json
└── README.md
```

---

## 📝 Getting Started

**Clone the repository**

```bash
git clone https://github.com/Ajith-11399/NextHire.git
```

**Install dependencies**

Frontend:

```bash
cd client
npm install
```

Backend:

```bash
cd server
npm install
```

**Run the application**

Frontend:

```bash
npm run dev
```

Backend:

```bash
npm run server
```

**Open in browser**
Navigate to `http://localhost:3000` for the frontend.

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.
