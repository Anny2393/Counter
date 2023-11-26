import React, { useState } from "react";

type ActionType = "inc" | "reset";

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = (action: ActionType) => {
        if (action === "inc" && counter < 5) {
            setCounter(counter + 1);
        } else if (action === "reset" && counter !== 0) {
            setCounter(0);
        }
    };

    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => handleClick("inc")}
                    disabled={counter === 5}
                    style={{ backgroundColor: counter === 5 ? "red" : "inherit",
                             color: counter === 5 ? "white" : "black" }}>inc</button>

            <button onClick={() => handleClick("reset")}
                    disabled={counter === 0}
// Используется условный оператор ? :, который проверяет, равно ли значение counter нулю (counter === 0).
// Если это условие верно, то устанавливается красный цвет ("red"), в противном случае используется наследованный цвет ("inherit").
                    style={{ backgroundColor: counter === 0 ? "red" : "inherit",
// Используется условный оператор ? :. Если значение counter равно нулю (counter === 0),
// то цвет текста устанавливается в белый ("white"), в противном случае используется черный цвет ("black").
                             color: counter === 0 ? "white" : "black" }}>reset</button>
        </div>
    );
};
