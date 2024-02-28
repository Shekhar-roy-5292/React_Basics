


export default function Child (props) {

    var message = "Hello from child"

    return (

        <div>

            {props.handleCallback(message)}
        </div>
    )
}