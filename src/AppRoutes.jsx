// src/AppRoutes.jsx
import { Box, CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const FullScreenScroller = lazy(() => import("./components/fullScreenScroller"));

export default function AppRoutes() {
    const location = useLocation();

    return (
        <Suspense
            fallback={
                <Box
                    sx={{
                        width: "100vw",
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "var(--color-bg)",
                    }}
                >
                    <CircularProgress sx={{ color: "var(--color-heading)" }} />
                </Box>
            }
        >
            <Routes location={location} key={location.pathname}>
                {/* Redirect root to /home */}
                <Route path="/" element={<Navigate to="/home" replace />} />

                {/* Public / marketing routes */}
                <Route path="/home" element={<FullScreenScroller label="Home" />} />
                <Route path="/about" element={<FullScreenScroller label="About" />} />
                <Route path="/services" element={<FullScreenScroller label="Services" />} />
                <Route path="/projects" element={<FullScreenScroller label="Projects" />} />
                <Route path="/blog" element={<FullScreenScroller label="Blog" />} />
                <Route path="/contact" element={<FullScreenScroller label="Contact" />} />

                {/* App / dashboard routes */}
                <Route path="/dashboard" element={<FullScreenScroller label="Dashboard" />} />
                <Route path="/account" element={<FullScreenScroller label="Account" />} />
                <Route path="/settings" element={<FullScreenScroller label="Settings" />} />

                {/* Auth routes */}
                <Route path="/login" element={<FullScreenScroller label="Login" />} />
                <Route path="/register" element={<FullScreenScroller label="Register" />} />
                <Route path="/forgot-password" element={<FullScreenScroller label="ForgotPassword" />} />

                {/* Legal / support / system routes */}
                <Route path="/legal/privacy" element={<FullScreenScroller label="PrivacyPolicy" />} />
                <Route path="/legal/terms" element={<FullScreenScroller label="Terms" />} />
                <Route path="/help/faq" element={<FullScreenScroller label="FAQ" />} />
                <Route path="/changelog" element={<FullScreenScroller label="Changelog" />} />

                {/* 404 */}
                <Route path="*" element={<FullScreenScroller label="NotFound" />} />
            </Routes>
        </Suspense>
    );
}
