import React, {useState} from 'react';







function Increm() {
    
    // const state =  useState();
     const [count, setaqee] = useState(0);

     const Myincre = () => {
         setaqee(count + 1);
                            }

     const MyDecre = () => {
         setaqee(count - 1);
                            }
                            
    return (
        <>
<h1>{count}</h1>
<button onClick={Myincre}>Increment</button>
<button onClick={MyDecre}>Decrement</button>
    </>
    );
    
}
export default Increm;