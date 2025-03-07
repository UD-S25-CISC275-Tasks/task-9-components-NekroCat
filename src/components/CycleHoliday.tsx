import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    let holidaysByAlphabet = [
        "Christmas 🎄",
        "Easter 🐣",
        "New Year 🎉",
        "Thanksgiving 🍁",
        "Ukraine Independence Day 🇺🇦"
    ];

    let holidaysByYear = [
        "New Year 🎉",
        "Easter 🐣",
        "Ukraine Independence Day 🇺🇦",
        "Thanksgiving 🍁",
        "Christmas 🎄"
    ];

    let [currentHoliday, setCurrentHoliday] = useState<string>(
        holidaysByAlphabet[0]
    );

    const advanceByAlphabet = () => {
        const currentIndex = holidaysByAlphabet.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysByAlphabet.length;
        setCurrentHoliday(holidaysByAlphabet[nextIndex]);
    };

    const advanceByYear = () => {
        const currentIndex = holidaysByYear.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysByYear.length;
        setCurrentHoliday(holidaysByYear[nextIndex]);
    };

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
