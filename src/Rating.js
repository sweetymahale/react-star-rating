import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./Style.js";
const Rate = () => {
    const [rate, setRate] = useState(0);
    return (
        <>
            <h2>Give a rating!</h2>
            <Container>
                {[...Array(5)].map((item, index) => {
                    const givenRating = index + 1;
                    return (
                        <label>
                            <Radio
                                type="radio"
                                value={givenRating}
                                onClick={() => {
                                    setRate(givenRating);
                                    alert(
                                        `Are you sure you want to give 
									${givenRating} stars ?`
                                    );
                                }}
                            />
                            <Rating>

                                <FaStar
                                    color={
                                        givenRating < rate || givenRating === rate
                                            ? "000"
                                            : "rgb(192,192,192)"
                                    }
                                />
                            </Rating>
                        </label>
                    );
                })}
            </Container>
        </>
    );
};

export default Rate;
