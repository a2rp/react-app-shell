// src/App.styled.js
import styled, { css } from "styled-components";

/* Scrollbar that stays the same size (no layout shift) and
   uses subtle tints from the theme. */
const hoverScrollbarStable = css`
    scrollbar-gutter: stable;

    /* Firefox defaults */
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;

    /* WebKit size */
    &::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: transparent;
        border-radius: 8px;
        border: 3px solid transparent;
        background-clip: content-box;
        transition: background 0.15s ease;
    }

    @media (hover: hover) {
        /* Desktop: thumb only visible on hover */
        &:hover {
            scrollbar-color: var(--scrollbar-thumb) transparent;
        }

        &:hover::-webkit-scrollbar-track {
            background: var(--scrollbar-track);
        }

        &:hover::-webkit-scrollbar-thumb {
            background: var(--scrollbar-thumb);
        }

        &::-webkit-scrollbar-thumb:hover {
            background: var(--scrollbar-thumb-hover);
        }

        &::-webkit-scrollbar-thumb:active {
            background: var(--scrollbar-thumb-active);
        }
    }

    /* Touch devices: keep a visible thin thumb */
    @media (hover: none) {
        scrollbar-width: thin;
        scrollbar-color: var(--scrollbar-thumb) transparent;

        &::-webkit-scrollbar-track {
            background: var(--scrollbar-track);
        }

        &::-webkit-scrollbar-thumb {
            background: var(--scrollbar-thumb);
        }
    }
`;

export const Styled = {
    Wrapper: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        min-height: 100vh;
        background-color: var(--color-bg);
        color: var(--color-bg-text);
    `,
    Main: styled.main`
        position: relative;
        width: 100%;
        padding-top: 64px;
        /* height: calc(100vh - 100px); */
        overflow-y: scroll;
        background-color: var(--color-bg);
        color: var(--color-bg-text);
        overflow: hidden;

        /* subtle inner border instead of red */
        box-shadow: 0 0 0 1px var(--color-border) inset;

        ${hoverScrollbarStable};
    `,
    RoutesWrapper: styled.div`
        /* height: calc(100vh - 100px); */
        background-color: var(--color-bg);
        color: var(--color-bg-text);
    `,
    Drawer: styled.div`
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 9999;

        display: flex;
        align-items: stretch;

        /* overlay */
        border: 1px solid var(--color-border);
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);

        .empty {
            width: 100%;
            opacity: 0;

            animation: animateEmpty 0.2s ease 1 forwards;
            @keyframes animateEmpty {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        }

        .navlinksWrapper {
            flex: 0 0 300px;
            width: 100%;
            border: 1px solid var(--color-border);
            background-color: var(--color-surface);
            color: var(--color-surface-text);

            transform: translateX(100%);
            animation: animateDrawer 0.2s ease 1 forwards;

            @keyframes animateDrawer {
                0% {
                    transform: translateX(100%);
                }
                100% {
                    transform: translateX(0);
                }
            }

            .navlinksScroller {
                height: 100%;
                overflow: hidden;
                overflow-y: auto;
                ${hoverScrollbarStable};
            }
        }
    `,
};
