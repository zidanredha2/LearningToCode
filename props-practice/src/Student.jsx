function Student(props) {
    return (
        <>
            <div className="student">
                <h1>Hello, {props.name}!</h1>
                <h2>He is {props.age} years old!</h2>
                <h2>Student: {props.isStudent ? "Yes" : "No"}</h2>
            </div>
        </>
    )
}

export default Student;