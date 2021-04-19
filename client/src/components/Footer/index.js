import React from 'react';

function Footer() {
    return(
        <footer className="footer">
            <div className="row m-4 p-5 shadow">
                <div className="col-1"></div>
                <div className="text-center col">
                <p className="card-title footer-text">
                        Made with    
                        <span
                        role="img"
                        aria-label="workout"
                        > 
                          💪
                        </span>
                        <a className="footerI" href="https://github.com/jconeff"> by Jessica Coneff</a> ,
                        <a className="footerI" href="https://github.com/Dmorrel7"> Dalton Morrel</a>,
                        <a className="footerI" href="https://github.com/valiantcreative33"> Ruben Matamoros</a>,
                        <a className="footerI" href="https://github.com/reaganjoseph26"> Reagan Joseph</a>,  
                        <a className="footerI" href="https://github.com/gabrielazalta"> and Gabriela Zalta</a>
                    </p>
                    <p><a className="footerI" href="https://github.com/gabrielazalta/fitter/" className="footer footerI"><i class="fab fa-github"></i></a></p>
                </div>
                <div className="col-1"></div>
            </div>
        </footer>
    );
}

export default Footer;