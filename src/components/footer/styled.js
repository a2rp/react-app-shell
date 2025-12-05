// src/components/footer/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        /* position: fixed; */
        /* bottom: 0; */
        width: 100%;
        height: 48px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;

        padding: 0 24px;

        z-index: 100;

        @media (width < 768px) {
            height: auto;
            padding: 10px 16px;
            flex-direction: column;
            align-items: center;
        }

        .left {
            white-space: nowrap;
        }

        .right {
            white-space: nowrap;

            span.heart {
                color: #ff4d6a;
                margin: 0 2px;
            }

            @media (width < 768px) {
            }
        }
    `,
};
