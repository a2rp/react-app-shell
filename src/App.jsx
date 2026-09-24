import { useEffect, useState } from "react";
import { Styled } from "./App.styled";
import Footer from "./components/footer";
import Header from "./components/header";
import AppRoutes from "./AppRoutes";
import NavLinks from "./components/navlinks";

const App = () => {
    const [displayDrawer, setDisplayDrawer] = useState(false);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = displayDrawer ? "hidden" : "";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [displayDrawer]);

    return (
        <>
            <Styled.Wrapper>
                <Header setDisplayDrawer={setDisplayDrawer} />
                <Styled.Main>
                    <Styled.RoutesWrapper>
                        <AppRoutes />
                    </Styled.RoutesWrapper>
                    <Footer />
                </Styled.Main>
            </Styled.Wrapper>

            {displayDrawer && (
                <Styled.Drawer>
                    <div
                        className="empty"
                        onClick={() => setDisplayDrawer(false)}
                        aria-label="Close navigation"
                    />
                    <div className="navlinksWrapper">
                        <div className="navlinksScroller">
                            <NavLinks onNavigate={() => setDisplayDrawer(false)} />
                        </div>
                    </div>
                </Styled.Drawer>
            )}
        </>
    );
};

export default App;
