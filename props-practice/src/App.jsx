import Student from "./Student.jsx"

function App() {
  return (
    <>
      <Student name="SpongeBob" age="19" isStudent={true}/>
      <Student name="Patrick" age="21" isStudent={false}></Student>
    </>
  )
}

export default App
