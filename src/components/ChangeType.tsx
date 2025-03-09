import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionT, changeType] = useState<QuestionType>(
        "short_answer_question",
    );

    return (
        <div>
            <Button
                onClick={() => {
                    if (questionT === "multiple_choice_question") {
                        changeType("short_answer_question");
                    } else {
                        changeType("multiple_choice_question");
                    }
                }}
            >
                Change Type
            </Button>
            {questionT === "multiple_choice_question" ?
                <div>Multiple Choice</div>
            :   <div>Short Answer</div>}
        </div>
    );
}
