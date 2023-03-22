import React from "react";
import style from './Navbar.module.css';
import {useNavigate, useLocation} from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();
    const {pathname} = useLocation();

    return (
        <div className={style.Buttons}>
            <div onClick={() => navigate("/")} style={pathname === "/" ? {backgroundColor: "#3b3a2a"} : {backgroundColor: "darkgray"}}>Memo (Pure
                Component)
            </div>
            <div onClick={() => navigate("/useCallBackExample")}
                 style={pathname === "/useCallBackExample" ? {backgroundColor: "#3b3a2a"} : {backgroundColor: "darkgray"}}>UseCallBack Hook
            </div>
            <div onClick={() => navigate("/useMemoExample")}
                 style={pathname === "/useMemoExample" ? {backgroundColor: "#3b3a2a"} : {backgroundColor: "darkgray"}}>UseMemo Hook
            </div>
        </div>
    )
}

export default Navbar;
