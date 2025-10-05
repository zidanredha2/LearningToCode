import Student from "./Student.jsx"
import './App.css'
function App() {
  return (
    <>
      <Student name="SpongeBob" age={12} isStudent={true}/>
      <Student name="Patrick" age={22} isStudent={false}></Student>
      <Student name= "Squidward" age={43}></Student>
    </>
  )
}

export default App
