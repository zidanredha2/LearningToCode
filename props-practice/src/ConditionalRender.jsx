function ConditionalRender(props) {
    if (props.isStudent) {
        return <h1>This element is a Student!</h1>;
    } else {
        return <h1>This element is NOT a Student!</h1>;
    }
}
export default ConditionalRender;