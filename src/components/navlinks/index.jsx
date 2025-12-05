import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";

import {
    TbLayoutDashboard,
    TbUser,
    TbId,
    TbCircle,
    TbAlertTriangle,
    TbLogin,
    TbUserPlus,
    TbFileDescription,
    TbLayersSubtract,
    TbChevronRight,
    TbSearch,
    TbX,
    TbSquareRoundedX,
} from "react-icons/tb";

import { useEffect, useRef, useState } from "react";

/* ---------- NAV DATA: website + app + utility (no multi-level) ---------- */
const NAV_DATA = [
    {
        label: "Website",
        items: [
            { to: "/home", label: "Home", icon: TbLayoutDashboard },
            { to: "/about", label: "About", icon: TbUser },
            { to: "/services", label: "Services", icon: TbFileDescription },
            { to: "/projects", label: "Projects", icon: TbLayersSubtract },
            { to: "/blog", label: "Blog", icon: TbFileDescription },
            { to: "/contact", label: "Contact", icon: TbId },
        ],
    },

    {
        label: "App",
        items: [
            { to: "/dashboard", label: "Dashboard", icon: TbLayoutDashboard },
            { to: "/account", label: "Account", icon: TbId },
            { to: "/settings", label: "Settings", icon: TbCircle },
        ],
    },

    {
        label: "Auth",
        items: [
            { to: "/login", label: "Login", icon: TbLogin },
            { to: "/register", label: "Register", icon: TbUserPlus },
        ],
    },

    {
        label: "More",
        items: [
            { to: "/help/faq", label: "FAQ", icon: TbAlertTriangle },
            { to: "/legal/privacy", label: "Privacy Policy", icon: TbFileDescription },
            { to: "/legal/terms", label: "Terms & Conditions", icon: TbFileDescription },
            { to: "/changelog", label: "Changelog", icon: TbLayersSubtract },
        ],
    },
];

/* ---------- Section group with collapsible parent ---------- */
const SectionGroup = ({
    section,
    showDivider,
    onNavigate,
    isInitiallyOpen,
    hasSearch,
    activePath,
    activeLinkRef,
}) => {
    const [open, setOpen] = useState(isInitiallyOpen);

    // Route / search ke hisaab se open-state control
    useEffect(() => {
        if (hasSearch) {
            // Search mode: jitne sections dikh rahe, unhe open rakho
            setOpen(true);
        } else {
            // Normal mode: sirf active-wala open, baaki default
            setOpen(isInitiallyOpen);
        }
    }, [hasSearch, isInitiallyOpen]);

    const toggleOpen = () => {
        // Search mode me manual toggle karne ka koi sense nahi, to ignore
        if (hasSearch) return;
        setOpen((p) => !p);
    };

    const handleClick = () => {
        if (window.innerWidth < 1200 && typeof onNavigate === "function") {
            onNavigate();
        }
    };

    return (
        <div className="sectionBlock">
            <button
                type="button"
                className={`sectionHeader ${open ? "open" : ""}`}
                onClick={toggleOpen}
            >
                <span className="sectionLabel">{section.label}</span>
                <TbChevronRight className="sectionChevron" />
            </button>

            <div
                className="sectionCollapse"
                style={{ maxHeight: open ? "600px" : "0px" }}
            >
                <ul className="navList">
                    {section.items.map((item) => {
                        const Icon = item.icon;
                        const isActive = item.to === activePath;

                        return (
                            <li className="navItem" key={item.to}>
                                <NavLink
                                    to={item.to}
                                    className={
                                        "navLink" + (isActive ? " active" : "")
                                    }
                                    onClick={handleClick}
                                    ref={isActive ? activeLinkRef : undefined}
                                >
                                    <span className="icon">
                                        <Icon />
                                    </span>
                                    <span className="label">{item.label}</span>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {showDivider && <div className="divider" aria-hidden="true" />}
        </div>
    );
};

/* ---------- Main NavLinks component ---------- */
const NavLinks = ({ onNavigate }) => {
    const location = useLocation();
    const activePath = location.pathname;
    const activeLinkRef = useRef(null);
    const [query, setQuery] = useState("");

    // scroll active link into view (center) on route change
    useEffect(() => {
        if (activeLinkRef.current) {
            activeLinkRef.current.scrollIntoView({
                block: "center",
                behavior: "smooth",
            });
        }
    }, [activePath]);

    const handleCloseDrawer = () => {
        if (typeof onNavigate === "function") {
            onNavigate();
        }
    };

    const handleChangeQuery = (e) => {
        setQuery(e.target.value);
    };

    const handleClearQuery = () => {
        setQuery("");
    };

    const q = query.trim().toLowerCase();
    const hasSearch = !!q;

    return (
        <Styled.Wrap>
            <div className="searchClose">
                <div className="searchBox">
                    <TbSearch className="searchIcon" />
                    <input
                        type="text"
                        className="searchInput"
                        placeholder="Search links..."
                        value={query}
                        onChange={handleChangeQuery}
                    />
                    <div className="clearBtnWrapper">
                        {query && (
                            <div
                                className="clearBtn"
                                onClick={handleClearQuery}
                                aria-label="Clear search"
                            >
                                <TbX size={20} />
                            </div>
                        )}
                    </div>
                </div>

                <button
                    type="button"
                    className="drawerCloseBtn"
                    onClick={handleCloseDrawer}
                    aria-label="Close navigation"
                >
                    <TbSquareRoundedX />
                </button>
            </div>

            {NAV_DATA.map((section, secIndex) => {
                // filter items by search (label / path)
                let sectionToRender = section;

                if (hasSearch && section.items && section.items.length) {
                    const filteredItems = section.items.filter((item) => {
                        if (!item.to && !item.label) return false;
                        const labelMatch =
                            item.label &&
                            item.label.toLowerCase().includes(q);
                        const pathMatch =
                            item.to && item.to.toLowerCase().includes(q);
                        return labelMatch || pathMatch;
                    });

                    if (filteredItems.length === 0) {
                        return null;
                    }
                    sectionToRender = { ...section, items: filteredItems };
                }

                const sectionHasActive = section.items.some(
                    (item) => item.to && item.to === activePath
                );

                return (
                    <SectionGroup
                        key={section.label}
                        section={sectionToRender}
                        showDivider={secIndex < NAV_DATA.length - 1}
                        onNavigate={onNavigate}
                        isInitiallyOpen={sectionHasActive}
                        hasSearch={hasSearch}
                        activePath={activePath}
                        activeLinkRef={activeLinkRef}
                    />
                );
            })}
        </Styled.Wrap>
    );
};

export default NavLinks;
