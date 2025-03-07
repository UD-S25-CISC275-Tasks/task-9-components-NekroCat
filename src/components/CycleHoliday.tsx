import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    let holidays = [
        { name: "Christmas", emoji: "🎄", date: "2025-12-25" },
        { name: "Ukraine's Independence Day", emoji: "🇺🇦", date: "2025-08-24" },
        { name: "New Year", emoji: "🎉", date: "2025-01-01" },
        { name: "Thanksgiving", emoji: "🦃", date: "2025-11-27" },
        { name: "Easter", emoji: "🐰", date: "2025-04-12" }
    ];

    let holidaysByYear = [...holidays].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    let holidaysAlphabetical = [...holidays].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    const [currentHoliday, setCurrentHoliday] = useState(holidays[2]);

    let getNextHolidayAlphabetically = (current: {
        name: string;
        emoji: string;
    }) => {
        let currentIndex = holidaysAlphabetical.findIndex(
            (holiday) => holiday.name === current.name
        );
        return holidaysAlphabetical[
            (currentIndex + 1) % holidaysAlphabetical.length
        ];
    };

    let getNextHolidayByYear = (current: { name: string; emoji: string }) => {
        let currentIndex = holidaysByYear.findIndex(
            (holiday) => holiday.name === current.name
        );
        return holidaysByYear[(currentIndex + 1) % holidaysByYear.length];
    };

    return (
        <div>
            <h2>Holiday: {currentHoliday.emoji + " " + currentHoliday.name}</h2>
            <Button
                onClick={() => {
                    let nextHoliday =
                        getNextHolidayAlphabetically(currentHoliday);
                    setCurrentHoliday(nextHoliday);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    let nextHoliday = getNextHolidayByYear(currentHoliday);
                    setCurrentHoliday(nextHoliday);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
