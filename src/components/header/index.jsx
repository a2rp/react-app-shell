import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

const THEME_KEY = "react-app-shell-theme";

const Header = ({ setDisplayDrawer }) => {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        try {
            const saved = window.localStorage.getItem(THEME_KEY);
            const lightTheme = saved === "light";
            document.documentElement.toggleAttribute("data-theme", lightTheme);
            setIsLight(lightTheme);
        } catch {
            document.documentElement.removeAttribute("data-theme");
        }
    }, []);

    const handleToggleTheme = () => {
        setIsLight((previous) => {
            const next = !previous;
            document.documentElement.toggleAttribute("data-theme", next);
            window.localStorage.setItem(THEME_KEY, next ? "light" : "dark");
            return next;
        });
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <Styled.Col className="left">
                    <NavLink to="/" className="brandName" aria-label="React App Shell home">
                        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" />
                        <span>React App Shell</span>
                    </NavLink>
                </Styled.Col>

                <Styled.Col className="right">
                    <button
                        type="button"
                        className={`themeToggle ${isLight ? "light" : "dark"}`}
                        onClick={handleToggleTheme}
                        aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
                        title={isLight ? "Switch to dark theme" : "Switch to light theme"}
                    >
                        <span className="themeToggleBall" />
                    </button>

                    <button
                        type="button"
                        className="sliderLinkWrapper"
                        onClick={() => setDisplayDrawer(true)}
                        aria-label="Open navigation"
                        title="Open navigation"
                    >
                        <IoIosMenu size={22} />
                    </button>
                </Styled.Col>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
