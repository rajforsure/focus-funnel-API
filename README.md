
# 🚀 FocusFunnel API – Break Down Tasks Into Mini-Steps

> A smart productivity API that helps you deconstruct broad or vague tasks into clear, actionable mini-steps — like having a digital project manager at your fingertips!

## 🌟 Overview

**FocusFunnel** is a custom-built Node.js API designed to supercharge your productivity. Whether you're a student, developer, or anyone juggling complex tasks, this API helps you **structure your workflow** with step-by-step clarity.

While the current version allows manual task + step creation and management, it’s designed to be upgraded to use **AI-powered auto-breakdown** using OpenAI in future versions.

## 📦 Features

- 🔹 **CRUD Operations** for managing your tasks and steps  
- 📂 MongoDB integration for real-time persistence  
- 🧠 Designed for future AI integration (via OpenAI)  
- ⚡ Simple Frontend for testing (Optional)  
- 🌐 CORS and JSON support for full-stack development  
- 📜 Clean and well-commented codebase  

## 📁 Folder Structure

```

focus-funnel-API/
├── models/             # Mongoose schema for Funnels
├── routes/             # Route handler for API endpoints
├── public/             # Frontend HTML + JS (Optional UI)
├── .env                # Environment variables
├── server.js           # Entry point of the server
├── package.json
└── README.md           # You're here!

````

## 🔗 API Endpoints

All routes accept and return **JSON**.

| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| POST   | `/api/funnels`     | Create a new funnel             |
| GET    | `/api/funnels`     | Get all funnels                 |
| PUT    | `/api/funnels/:id` | Update a funnel by its ID       |
| DELETE | `/api/funnels/:id` | Delete a funnel by its ID       |

### 🧾 Sample Funnel Object

```json
{
  "task": "Build Portfolio Website",
  "steps": [
    "Choose tech stack",
    "Design layout",
    "Develop pages",
    "Deploy to GitHub Pages"
  ]
}
````

## 🧪 Test Your API (Using curl)

### ✅ Create a Funnel

```bash
curl -X POST http://localhost:3000/api/funnels \
-H "Content-Type: application/json" \
-d '{"task":"Learn DSA","steps":["Arrays","Linked Lists","Trees"]}'
```

### 📥 Get All Funnels

```bash
curl http://localhost:3000/api/funnels
```

### ✏️ Update a Funnel

```bash
curl -X PUT http://localhost:3000/api/funnels/<funnel_id> \
-H "Content-Type: application/json" \
-d '{"task":"Updated Task","steps":["New Step 1","New Step 2"]}'
```

### ❌ Delete a Funnel

```bash
curl -X DELETE http://localhost:3000/api/funnels/<funnel_id>
```

## 🛠️ Setup & Installation

### 1. Clone the Repo

```bash
git clone https://github.com/rajforsure/focus-funnel-API.git
cd focus-funnel-API
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup `.env` File

Create a `.env` file at the root with the following:

```env
MONGO_URI=mongodb://127.0.0.1:27017/focusfunnelDB
```

### 4. Start the Server

```bash
npx nodemon server.js
```

> 🔊 You’ll see:
> ✅ Server running on port 3000
> ✅ Connected to MongoDB

## 🖥️ Optional Frontend

Inside `/public`, you’ll find:

* `index.html` — Simple UI to test API
* `script.js` — Handles frontend requests

Once the server is running, just open `index.html` in your browser!

## 🔮 Coming Soon – AI-Powered Auto Breakdown

Want the API to **automatically break tasks into steps** using ChatGPT?

### Planned Upgrade:

* Use OpenAI's GPT model to generate steps from a single-line task
* Example:

  * Input: `"Prepare for coding interview"`
  * Output: `["Review DSA basics", "Practice Leetcode", "Mock interviews"]`

### To Prepare for Smart Mode:

1. [Get your OpenAI API Key](https://platform.openai.com/account/api-keys)
2. Add to your `.env`:

```env
OPENAI_API_KEY=your-key-here
```

3. Update the controller logic to use GPT API

⚠️ Not yet implemented in this version but fully planned and extensible.

## 📋 Tech Stack

| Technology       | Purpose                           |
| ---------------- | --------------------------------- |
| Node.js          | Server runtime                    |
| Express.js       | Server framework / routing        |
| MongoDB          | NoSQL database                    |
| Mongoose         | ODM for MongoDB                   |
| dotenv           | Manage environment variables      |
| HTML/CSS/JS      | Optional frontend UI              |
| OpenAI (planned) | Future smart auto-step generation |

## 🧠 Use Cases

* Students organizing study tasks
* Developers planning feature rollouts
* Content creators breaking down projects
* Anyone who procrastinates big goals 😄

## 🧑‍💻 Author

Built with ❤️ by [Raj Mondal](https://github.com/rajforsure)
Feel free to ⭐️ the repo or open issues/suggestions!

## 📝 License

This project is open-source and free to use under the [MIT License](LICENSE).
