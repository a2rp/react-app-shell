// src/components/header/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        inset-inline: 0;
        top: 0;
        height: 64px;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--color-surface);
        color: var(--color-surface-text);
        border-bottom: 1px solid var(--color-border);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    `,
    Main: styled.div`
        width: 100%;
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,
    Col: styled.div`
        &.left {
            .brandName {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 8px 0;
                /* font-size: 1.1rem; */
                font-weight: 700;
                /* letter-spacing: 0.08em; */
                text-transform: uppercase;
                color: var(--color-heading);
                cursor: pointer;
                user-select: none;

                img {
                    width: 34px;
                    height: 34px;
                    object-fit: contain;
                    border-radius: 8px;
                }

                transition: opacity 0.2s ease, transform 0.1s ease;

                &:hover {
                    opacity: 0.9;
                    transform: translateY(-1px);
                }
            }
        }

        &.right {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 12px;

            /* Theme toggle slider */
            .themeToggle {
                position: relative;
                width: 56px;
                height: 28px;
                border-radius: 999px;
                padding: 3px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface-soft);

                display: inline-flex;
                align-items: center;
                justify-content: space-between;

                cursor: pointer;
                outline: none;
                transition: background-color 0.2s ease, border-color 0.2s ease,
                    box-shadow 0.2s ease, transform 0.1s ease;

                .themeToggleBall {
                    position: absolute;
                    top: 3px;
                    left: 3px;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background-color: var(--color-heading);
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
                    transform: translateX(0);
                    transition: transform 0.22s ease, background-color 0.2s ease;
                }

                &.light .themeToggleBall {
                    /* move to right */
                    transform: translateX(24px);
                }

                &:hover {
                    box-shadow: var(--shadow-soft);
                    transform: translateY(-1px);
                }
            }

            /* Menu icon button */
            .sliderLinkWrapper {
                border-radius: 999px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface-soft);
                padding: 6px 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                color: var(--color-surface-soft-text);
                cursor: pointer;

                transition: background-color 0.2s ease, box-shadow 0.2s ease,
                    transform 0.1s ease, border-color 0.2s ease;

                &:hover {
                    background-color: var(--color-surface);
                    border-color: var(--color-border);
                    box-shadow: var(--shadow-soft);
                    transform: translateY(-1px);
                }
            }
        }
    `,
};
