# SpringOpenAI (Spring Boot + React ChatGPT Integration)

This project is a full-stack AI chatbot application built using **Spring Boot (Java)** for the backend and **React.js** for the frontend. It integrates with **OpenAI's ChatGPT API** to provide real-time, intelligent chatbot responses.

---

## 🔧 Tech Stack

### Backend (Spring Boot)
- Java 21
- Spring Boot
- Spring Web
- REST APIs
- OpenAI API (via `RestTemplate`)
- Maven
- Swagger (OpenAPI UI)

### Frontend (React)
- React.js (Vite)
- Axios
- Tailwind CSS / CSS Modules
- Responsive UI

## 📦 Project Structure


SpringOpenAI/
├── SpringOpenAI/ # Backend - Spring Boot project
│ └── src/
│ ├── controller/ # ChatGPT API Controller
│ ├── service/ # Service to call OpenAI API
│ └── dto/ # Request/Response Models
├── chatgpt-react/ # Frontend - React App
│ └── src/
│ ├── components/ # UI Components
│ └── App.jsx # Main Chat UI



## 🚀 Features

- Chat interface powered by ChatGPT
- REST API integration with OpenAI
- Modular and clean code structure
- Real-time prompt-response
- Beautiful UI with multiple sections (Navbar, About, Features, Footer)
- Full-stack ready for deployment

---

## 🛠️ Setup Instructions

### Backend (Spring Boot)
cd SpringOpenAI
./mvnw spring-boot:run
Make sure to set your OpenAI API Key in application.properties:
properties
Copy
Edit
openai.api.key=your-openai-api-key


Frontend (React)
bash
Copy
Edit
cd chatgpt-react
npm install
npm run dev

🧠 Powered by
OpenAI GPT-3.5/4
Spring Boot
React.js
Vite

🙌 Author
Sanket Solanke
