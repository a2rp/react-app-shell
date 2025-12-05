import React, { useState } from 'react';
import { Styled } from './App.styled';
import Footer from './components/footer';
import Header from './components/header';
import AppRoutes from './AppRoutes';
import NavLinks from './components/navlinks';

const App = () => {
    const [displayDrawer, setDisplayDrawer] = useState(false);
    const handleToggleDisplayDrawer = () => {
        setDisplayDrawer(prev => !prev);
        // console.log("displayDrawer", displayDrawer);
    };

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


            {displayDrawer && <>
                <Styled.Drawer>
                    <div className="empty" onClick={handleToggleDisplayDrawer}></div>
                    <div className="navlinksWrapper">
                        <div className="navlinksScroller">
                            <NavLinks onNavigate={handleToggleDisplayDrawer} />
                        </div>
                    </div>
                </Styled.Drawer>
            </>}
        </>
    )
}

export default App;

