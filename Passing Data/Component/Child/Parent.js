
import Child from './Child'

export default function Parent (){

    function CallBack (childData){

        return (
            <div>
                <p>Message from child - {childData}</p>
                
            </div>
        )

    }

    return (

        <div>
            <h1> Parent to Child</h1>
            <br/>
            <Child handleCallback={CallBack}/>

        </div>
    )
}