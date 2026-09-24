import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        width: 100%;
        min-height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 12px 24px;
        border-top: 1px solid var(--color-border);

        @media (width < 768px) {
            flex-direction: column;
            align-items: center;
            padding: 16px;
        }

        p {
            margin: 0;
            color: var(--color-text-muted);
            text-align: center;
        }

        .socialLinks {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-wrap: wrap;
            gap: 8px;

            a {
                width: 32px;
                height: 32px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border: 1px solid var(--color-border);
                border-radius: var(--radius-sm);
                color: var(--color-text-muted);
                transition: color 0.2s ease, border-color 0.2s ease,
                    box-shadow 0.2s ease;

                &:hover,
                &:focus-visible {
                    color: var(--color-heading);
                    border-color: var(--color-heading);
                    box-shadow: var(--shadow-soft);
                    opacity: 1;
                }
            }
        }
    `,
};
