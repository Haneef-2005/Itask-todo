import { useState } from 'react'
import Navbar from './navbar'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    if (task.trim() === '') return
    setTodos([...todos, { id: Date.now(), text: task, completed: false, editing: false, editText: task }])
    setTask('')
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleEdit = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, editing: true, editText: todo.text } : todo
    ))
  }

  const handleSave = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, editing: false, text: todo.editText } : todo
    ))
  }

  const handleEditChange = (id, value) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, editText: value } : todo
    ))
  }

  const handleToggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <>
      <Navbar />

      <div className="container bg-green-200 h-140 mx-auto my-8 rounded-2xl shadow-lg p-4">
        <h1 className="text-2xl font-bold mb-4 mx-3">Write your tasks</h1>

        {/* Input Row */}
        <div className="flex items-center mx-3 mb-4">
          <input
            type="text"
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            className="border border-gray-300 rounded-2xl p-2 w-1/2 bg-white"
          />
          <button
            onClick={handleAdd}
            className="bg-green-400 text-white px-4 py-2 shadow-lg rounded-2xl mx-3 hover:bg-green-500"
          >
            Add Task
          </button>
        </div>

        {/* Todo List */}

        {/* Todo List */}
        <div className="todos mx-3 flex flex-col gap-2">
          {todos.map(todo => (
            <div key={todo.id} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />

              {/* Task text or edit input */}
              {todo.editing ? (
                <input
                  type="text"
                  value={todo.editText}
                  onChange={(e) => handleEditChange(todo.id, e.target.value)}
                  className="border border-gray-300 rounded-xl p-1 bg-white w-1/2"
                />
              ) : (
                <span className={`w-1/2 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                  {todo.text}
                </span>
              )}

              {todo.editing ? (
                <button
                  onClick={() => handleSave(todo.id)}
                  className="bg-blue-400 text-white px-4 py-2 shadow-lg rounded-2xl hover:bg-blue-500"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo.id)}
                  className="bg-green-400 text-white px-4 py-2 shadow-lg rounded-2xl hover:bg-green-500"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => handleDelete(todo.id)}
                className="bg-red-400 text-white px-4 py-2 shadow-lg rounded-2xl hover:bg-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App