import { Styled } from "./styled";

const FullScreenScroller = ({ label = "Page" }) => {
    const ITEMS = Array.from({ length: 7 }, () => label);

    return (
        <Styled.Wrap>
            {/* Top row – left direction */}
            <div className="scrollTrack scrollTrack--top">
                {ITEMS.map((text, idx) => (
                    <span className="scrollText" key={idx}>
                        {text}
                    </span>
                ))}
                {ITEMS.map((text, idx) => (
                    <span className="scrollText" key={`clone-top-${idx}`}>
                        {text}
                    </span>
                ))}
            </div>

            {/* Bottom row – right direction */}
            <div className="scrollTrack scrollTrack--bottom">
                {ITEMS.map((text, idx) => (
                    <span className="scrollText" key={`b-${idx}`}>
                        {text}
                    </span>
                ))}
                {ITEMS.map((text, idx) => (
                    <span className="scrollText" key={`clone-bot-${idx}`}>
                        {text}
                    </span>
                ))}
            </div>
        </Styled.Wrap>
    );
};

export default FullScreenScroller;
