import React from "react"
import ReactDOM from "react-dom/client"

const App = () => {
  return <div className="bg-pink-100">This is React App</div>
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
