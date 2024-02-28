
import Child from './Child'

export default function Parent (){


    return (

        <div>
            <h1> Parent to Child</h1>
            <br/>
            <Child message={'Message from Parent'} />

        </div>
    )
}