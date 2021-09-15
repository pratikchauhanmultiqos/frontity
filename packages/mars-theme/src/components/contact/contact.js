import { connect } from "frontity"

const Contact = ({ state }) => {
    const options = state.source.get("/contact");
    console.log(options)
    return (
        <div>
            <h1>Contact Us</h1>
        </div>
    )
}

export default connect(Contact);