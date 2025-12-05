import styled, { keyframes } from "styled-components";

const scrollX = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
`;

export const Styled = {
    Wrap: styled.section`
        width: 100vw;
        height: calc(100vh - 70px); /* header height jitna hai uske hisaab se */
        overflow: hidden;
        background-color: var(--color-bg);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        position: relative;
        gap: 32px;

        .scrollTrack {
            display: inline-flex;
            white-space: nowrap;
            will-change: transform;
        }

        /* Top row – left scroll */
        .scrollTrack--top {
            animation: ${scrollX} 18s linear infinite;
        }

        /* Bottom row – same animation, just reversed (right scroll) */
        .scrollTrack--bottom {
            animation: ${scrollX} 18s linear infinite reverse;
        }

        .scrollText {
            font-size: clamp(4rem, 12vw, 10rem);
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            padding: 0 100px;
            color: var(--color-heading);
            opacity: 0.18;
            user-select: none;
        }
    `,
};
