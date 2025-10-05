import Student from "./Student.jsx"
import ConditionalRender from "./ConditionalRender.jsx"
import './App.css'
function App() {
  return (
    <>
      <ConditionalRender isStudent={true}></ConditionalRender>
      <ConditionalRender isStudent={false}></ConditionalRender>
    </>
  )
}

export default App
