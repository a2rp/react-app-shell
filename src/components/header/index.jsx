// src/components/header/index.jsx
import { useEffect, useState } from "react";
import { Styled } from "./styled";
import { IoIosMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

const THEME_KEY = "react-app-shell-theme";

const Header = ({ setDisplayDrawer }) => {
    const [isLight, setIsLight] = useState(false);

    // On mount, read stored theme (if any) and apply
    useEffect(() => {
        try {
            const saved = window.localStorage.getItem(THEME_KEY);

            if (saved === "light") {
                document.documentElement.setAttribute("data-theme", "light");
                setIsLight(true);
            } else {
                // default = dark
                document.documentElement.removeAttribute("data-theme");
                setIsLight(false);
            }
        } catch (e) {
            // localStorage unavailable? fallback to dark
            document.documentElement.removeAttribute("data-theme");
            setIsLight(false);
        }
    }, []);

    const handleToggleTheme = () => {
        setIsLight((prev) => {
            const next = !prev;

            try {
                if (next) {
                    // Light mode
                    document.documentElement.setAttribute("data-theme", "light");
                    window.localStorage.setItem(THEME_KEY, "light");
                } else {
                    // Dark mode
                    document.documentElement.removeAttribute("data-theme");
                    window.localStorage.setItem(THEME_KEY, "dark");
                }
            } catch (e) {
                // ignore storage errors, still switch DOM theme
                if (next) {
                    document.documentElement.setAttribute("data-theme", "light");
                } else {
                    document.documentElement.removeAttribute("data-theme");
                }
            }

            return next;
        });
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <Styled.Col className="left">
                    <NavLink to="/" className="brandName">React App Shell</NavLink>
                </Styled.Col>

                <Styled.Col className="right">
                    <button
                        type="button"
                        className={`themeToggle ${isLight ? "light" : "dark"}`}
                        onClick={handleToggleTheme}
                        aria-label="Toggle theme"
                    >
                        <span className="themeToggleBall" />
                    </button>

                    <button
                        type="button"
                        className="sliderLinkWrapper"
                        onClick={() => setDisplayDrawer(prev => true)}
                    >
                        <IoIosMenu size={22} />
                    </button>
                </Styled.Col>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
