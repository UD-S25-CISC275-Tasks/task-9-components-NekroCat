import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isRevealed, setIsRevealed] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => {
                    setIsRevealed(!isRevealed);
                }}
            >
                Reveal Answer
            </Button>
            {isRevealed && <div>42</div>}
        </div>
    );
}
