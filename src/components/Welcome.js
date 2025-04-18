const Welcome = ({ name }) => {
    return <h1> {name ? name : 'Guest'}!</h1>
}

export default Welcome;