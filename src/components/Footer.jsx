import React from "react";



function Footer(){

    let d = new Date().getFullYear;
    console.log(d)

    return <div>
        <footer>
            <p>
                Copyright Sammy {d}
            </p>
        </footer>
    </div>
}

export default Footer;