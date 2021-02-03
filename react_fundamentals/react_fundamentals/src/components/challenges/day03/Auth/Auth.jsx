// imrs
import React, { useState } from 'react';
import Login from "./NewLogin/NewLogin";
import Signup from "./Signup/Signup";
// sfc

const Auth = () => {

    const [showLogin, setShowLogin] = useState(true);

    function handleToggle() {

        setShowLogin(!showLogin);
        // if (showLogin === true) {
        //     setShowLogin(false);
        // }
       

        // if(showLogin === true){
        //     setShowLogin(false)

        // }
    }

    return(
        <div>
            {showLogin == true ? <Login/> : <Signup />}
      
        <button onClick = {handleToggle}>Click to Toggle</button>
    </div>
    );
};

export default Auth;

