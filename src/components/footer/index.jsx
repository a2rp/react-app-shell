// src/components/footer/index.jsx
import { Styled } from "./styled";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Styled.Wrapper>
            <div className="left">© {year} | All rights reserved.</div>

            <div className="right">
                Created with <span className="heart">♥</span> by <a href="https://www.ashishranjan.net" target="_blank">Ashish Ranjan</a>
            </div>
        </Styled.Wrapper>
    );
};

export default Footer;
