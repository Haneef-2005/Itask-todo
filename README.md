# iTask — React Todo List App

A clean, responsive task management app built with **React** and **Tailwind CSS**. Add, edit, complete, and delete your daily tasks with a simple and intuitive interface.

---

## 🚀 Features

- ✅ **Add Tasks** — Type a task and click "Add Task" (or press `Enter`) to add it to the list
- ☑️ **Complete Tasks** — Check the checkbox to mark a task as done with a strikethrough
- ✏️ **Edit Tasks** — Click "Edit" to modify a task inline, then "Save" to confirm
- 🗑️ **Delete Tasks** — Remove any task instantly with the "Delete" button
- 🎨 **Clean UI** — Green-themed design with smooth hover effects and rounded components

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework & state management |
| Tailwind CSS | Utility-first styling |
| Vite | Fast dev server & build tool |
| JavaScript (ES6+) | App logic |

---

## 📁 Project Structure

```
Todo/
├── public/
├── src/
│   ├── App.jsx        # Main component with all todo logic
│   ├── navbar.jsx     # Navigation bar component
│   ├── App.css        # Global styles
│   └── index.css      # Base styles
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v16 or above)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Haneef-2005/todo-app.git

# Navigate into the project directory
cd todo-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Build for Production

```bash
npm run build
```

---

## 📸 Preview

The app features a green-themed card layout with:
- A top navbar with the **iTask** brand and navigation links
- An input field and "Add Task" button for creating tasks
- A task list where each item has a checkbox, task text, Edit, and Delete buttons

---

## 🧠 How It Works

Each task is stored as an object in React state:

```js
{
  id: Date.now(),       // Unique identifier
  text: "My task",      // Task content
  completed: false,     // Checkbox state
  editing: false,       // Edit mode toggle
  editText: "My task"   // Temporary text while editing
}
```

State is managed using React's `useState` hook — no external libraries needed.

---

## 👨‍💻 Author

**Haneef**
- GitHub: [@Haneef-2005](https://github.com/Haneef-2005)
- B.Tech AI & ML (2024–2028)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
