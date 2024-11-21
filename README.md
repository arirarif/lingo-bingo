# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Here’s a comprehensive `README.md` file for your project:

---

# **Lingo Bingo: A Vocabulary Learning Application**

Lingo Bingo is a fun and interactive language learning application designed to help users expand their vocabulary and improve communication skills in multiple languages. The platform allows users to explore lessons, view vocabulary cards, and learn essential words with detailed examples and context.

---

## **Table of Contents**

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## **Features**

- 🏷️ **Dynamic Lessons**: View vocabulary cards categorized into lessons with colorful and intuitive designs.
- 🔒 **Authentication System**: Users must log in to access private routes like lesson details.
  - Email/password login
  - Google authentication
- 🧠 **Vocabulary Cards**: Detailed cards with:
  - Word pronunciation
  - Meaning
  - Part of speech
  - Example sentences
  - Context (when to use)
- 📊 **Difficulty Levels**: Vocabulary cards are color-coded by difficulty (easy, medium, hard).
- 🎥 **Embedded Tutorials**: Learn language basics via embedded YouTube videos.
- 🌐 **Responsive Design**: Fully responsive and optimized for mobile, tablet, and desktop.
- 🧩 **Private Routes**: Protect lesson and profile pages to ensure only logged-in users can access them.
- 🔄 **State Management**: Handles user login/logout state seamlessly.

---

## **Tech Stack**

### **Frontend**
- **ReactJS**: For building user interfaces.
- **React Router**: For routing and navigation.
- **TailwindCSS**: For responsive and modern styling.
- **DaisyUI**: For prebuilt UI components.

### **Backend & Authentication**
- **Firebase**: 
  - Authentication for user login, registration, and Google sign-in.
  - Firestore (optional) for data persistence.

---

## **Setup and Installation**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/lingo-bingo.git
   cd lingo-bingo
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Firebase**
   - Create a Firebase project.
   - Enable **Authentication** (Email/Password and Google Sign-in).
   - Add your Firebase configuration to an `.env.local` file (see [Environment Variables](#environment-variables)).

4. **Run the Application**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

---

## **Project Structure**

```plaintext
src/
├── components/          # Reusable components (Navbar, Footer, etc.)
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Slider.jsx
├── data/                # Vocabulary JSON data
│   └── vocabulary.json
├── layouts/             # Layout components
│   ├── HomeLayout.jsx
│   └── AuthLayout.jsx
├── pages/               # Individual pages
│   ├── Home.jsx
│   ├── StartLearning.jsx
│   ├── LessonDetails.jsx
│   ├── Tutorials.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── NotFound.jsx
├── provider/            # Context API for Auth
│   └── AuthProvider.jsx
├── router/              # Route definitions
│   └── router.js
├── styles/              # Custom styles (optional)
├── App.jsx              # Main app component
├── main.jsx             # ReactDOM render
└── index.html           # HTML template
```

---

## **Environment Variables**

Create a `.env.local` file in the root directory and add your Firebase configuration:

```env
VITE_API_KEY=your-firebase-api-key
VITE_AUTH_DOMAIN=your-firebase-auth-domain
VITE_PROJECT_ID=your-firebase-project-id
VITE_STORAGE_BUCKET=your-firebase-storage-bucket
VITE_MESSAGING_SENDER_ID=your-firebase-sender-id
VITE_APP_ID=your-firebase-app-id
```

---

## **Usage**

1. **Access Public Pages**:
   - Home: Explore the mission and tutorials.
   - Start Learning: View the list of lessons.

2. **Authentication**:
   - Register or Login to access private routes.
   - Use Google Sign-in for faster login.

3. **View Lessons**:
   - Click on a lesson card to view detailed vocabulary cards.
   - Cards are color-coded by difficulty.

4. **Embedded Tutorials**:
   - Watch embedded YouTube videos on language basics.
---

## **Screenshots**

### **Home Page**
![Home Page Screenshot](https://via.placeholder.com/800x400)

### **Start Learning**
![Start Learning Screenshot](https://via.placeholder.com/800x400)

### **Lesson Details**
![Lesson Details Screenshot](https://via.placeholder.com/800x400)

### **Authentication**
![Login Screenshot](https://via.placeholder.com/800x400)

---

## **Contributing**

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

---