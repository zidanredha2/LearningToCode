import PropTypes from 'prop-types';
function Student(props) {
    return (
        <>
            <div className="student">
                <div>
                    <h1>Hello, {props.name}!</h1>
                    <h2>He is {props.age} years old!</h2>
                    <h2>Student: {props.isStudent ? "Yes" : "No"}</h2>
                </div>
            </div>
        </>
    )
}
Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}
export default Student;