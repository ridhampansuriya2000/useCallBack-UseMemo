import React from "react";
import style from './Navbar.module.css';
import {useNavigate} from "react-router-dom";

const Navbar = () =>{

    const navigate = useNavigate();

    return(
        <div className={style.Buttons}>
            <div onClick={()=>navigate("/")}>Memo (Pure Component)</div>
            <div onClick={()=>navigate("/useEffectExample")}>UseEffect Hook</div>
            <div onClick={()=>navigate("/useMemoExample")}>UseMemo Hook</div>
        </div>
    )
}

export default Navbar;