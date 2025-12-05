import styled from "styled-components";

export const Styled = {
    Wrap: styled.nav`
        padding: 12px 10px 20px;
        font-size: 13px;
        color: var(--color-text);

        /* Top search + close row */
        .searchClose {
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 0 2px 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--color-border);
        }

        .searchBox {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background-color: var(--color-surface-soft);
            transition: border-color 0.16s ease, background-color 0.16s ease,
                box-shadow 0.16s ease;
        }

        .searchBox:focus-within {
            border-color: var(--color-link);
            background-color: var(--color-surface);
            box-shadow: var(--shadow-soft);
        }

        .searchIcon {
            font-size: 14px;
            color: var(--color-text-muted);
            flex-shrink: 0;
        }

        .searchInput {
            flex: 1;
            border: none;
            outline: none;
            background: transparent;
            color: var(--color-text);
            font-size: 12px;
        }

        .searchInput::placeholder {
            color: var(--color-text-muted);
        }

        .clearBtnWrapper {
            width: 15px;
            height: 15px;

            .clearBtn {
                width: 15px;
                height: 15px;
                cursor: pointer;
                background: transparent;
                padding: 0;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                svg {
                    font-size: 14px;
                    color: var(--color-text-muted);
                }

                &:hover svg {
                    color: var(--color-heading);
                }
            }
        }

        .drawerCloseBtn {
            border: 1px solid var(--color-border);
            border-radius: 10px;
            padding: 4px 6px;
            background-color: var(--color-surface-soft);
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;

            svg {
                font-size: 16px;
                color: var(--color-text-muted);
            }

            transition: background-color 0.16s ease, border-color 0.16s ease,
                box-shadow 0.16s ease, transform 0.1s ease;

            &:hover {
                background-color: var(--color-surface);
                border-color: var(--color-border);
                box-shadow: var(--shadow-soft);
                transform: translateY(-1px);

                svg {
                    color: var(--color-heading);
                }
            }
        }

        .sectionBlock {
            margin-bottom: 6px;
        }

        /* Collapsible section header */
        .sectionHeader {
            width: 100%;
            margin: 6px 0 2px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid transparent;
            background-color: transparent;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;

            cursor: pointer;
            outline: none;

            transition: background-color 0.16s ease, border-color 0.16s ease,
                color 0.16s ease, transform 0.1s ease;

            .sectionLabel {
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                color: var(--color-text-muted);
            }

            .sectionChevron {
                font-size: 13px;
                color: var(--color-text-muted);
                transform: rotate(0deg);
                transition: transform 0.2s ease, color 0.16s ease;
            }

            &:hover {
                background-color: var(--color-surface-soft);
                border-color: var(--color-border);
                transform: translateX(1px);

                .sectionLabel {
                    color: var(--color-text);
                }

                .sectionChevron {
                    color: var(--color-heading);
                }
            }

            &.open {
                background-color: var(--color-surface-soft);
                border-color: var(--color-border);

                .sectionLabel {
                    color: var(--color-heading);
                }

                .sectionChevron {
                    transform: rotate(90deg);
                    color: var(--color-heading);
                }
            }
        }

        .sectionCollapse {
            overflow: hidden;
            transition: max-height 0.25s ease;
            margin-top: 2px;
        }

        .navList {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .navItem {
            margin-bottom: 4px;
        }

        /* ===== Base pill link ===== */
        .navLink {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 7px 10px;
            border-radius: 999px;
            text-decoration: none;
            cursor: pointer;
            color: var(--color-text);
            transition: background 0.15s ease, color 0.15s ease,
                transform 0.12s ease;

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                border-radius: 999px;
                background-color: var(--color-surface-soft);
                flex-shrink: 0;

                svg {
                    font-size: 14px;
                    color: var(--color-text-muted);
                }
            }

            .label {
                flex: 1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            &:hover {
                background-color: var(--color-surface-soft);
                transform: translateX(1px);

                .icon svg {
                    color: var(--color-heading);
                }
            }
        }

        .navLink.active {
            background-color: var(--color-surface-soft);
            color: var(--color-heading);

            .icon {
                background-color: var(--color-heading);

                svg {
                    color: var(--color-bg);
                }
            }
        }

        /* ===== Collapsible parent (for Multi level items) ===== */
        .parentItem {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 7px 10px;
            border-radius: 999px;
            cursor: pointer;
            transition: background 0.15s ease, transform 0.12s ease;

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                border-radius: 999px;
                background-color: var(--color-surface-soft);
                flex-shrink: 0;

                svg {
                    font-size: 14px;
                    color: var(--color-text-muted);
                }
            }

            .label {
                flex: 1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .chevron {
                margin-left: auto;
                font-size: 14px;
                color: var(--color-text-muted);
                transform: rotate(0deg);
                transition: transform 0.2s ease, color 0.16s ease;
            }

            &:hover {
                background-color: var(--color-surface-soft);
                transform: translateX(1px);
            }

            &.open .chevron {
                transform: rotate(90deg);
                color: var(--color-heading);
            }
        }

        /* Wrapper around nested list in multi level */
        .collapseWrapper {
            overflow: hidden;
            transition: max-height 0.25s ease;
            margin-left: 10px;
            padding-left: 12px;
            border-left: 1px dashed var(--color-border);
        }

        /* Leaf items in multi-level – smaller pills, no icon background */
        .navLink.leaf {
            padding-left: 6px;

            .icon {
                width: 18px;
                height: 18px;
                background-color: transparent;

                svg {
                    font-size: 10px;
                    color: var(--color-text-muted);
                }
            }

            .label {
                font-size: 12px;
            }
        }

        .divider {
            margin: 10px 4px 4px;
            border-top: 1px solid var(--color-border);
        }
    `,
};
