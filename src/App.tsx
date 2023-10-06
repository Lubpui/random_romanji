import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const App = () => {
    const [word, setWord] = useState<{ hiragana: string; romaji: string }[]>([
        { hiragana: "あ", romaji: "a" },
        { hiragana: "い", romaji: "i" },
        { hiragana: "う", romaji: "u" },
        { hiragana: "え", romaji: "e" },
        { hiragana: "お", romaji: "o" },

        { hiragana: "か", romaji: "ka" },
        { hiragana: "き", romaji: "ki" },
        { hiragana: "く", romaji: "ku" },
        { hiragana: "け", romaji: "ke" },
        { hiragana: "こ", romaji: "ko" },

        { hiragana: "さ", romaji: "sa" },
        { hiragana: "し", romaji: "shi" },
        { hiragana: "す", romaji: "su" },
        { hiragana: "せ", romaji: "se" },
        { hiragana: "そ", romaji: "so" },

        { hiragana: "た", romaji: "ta" },
        { hiragana: "ち", romaji: "chi" },
        { hiragana: "つ", romaji: "tsu" },
        { hiragana: "て", romaji: "te" },
        { hiragana: "と", romaji: "to" },

        { hiragana: "な", romaji: "na" },
        { hiragana: "に", romaji: "ni" },
        { hiragana: "ぬ", romaji: "nu" },
        { hiragana: "ね", romaji: "ne" },
        { hiragana: "の", romaji: "no" },

        { hiragana: "は", romaji: "ha" },
        { hiragana: "ひ", romaji: "hi" },
        { hiragana: "ふ", romaji: "fu" },
        { hiragana: "へ", romaji: "he" },
        { hiragana: "ほ", romaji: "ho" },

        { hiragana: "ま", romaji: "ma" },
        { hiragana: "み", romaji: "mi" },
        { hiragana: "む", romaji: "mu" },
        { hiragana: "め", romaji: "me" },
        { hiragana: "も", romaji: "mo" },

        { hiragana: "や", romaji: "ya" },
        { hiragana: "ゆ", romaji: "yu" },
        { hiragana: "よ", romaji: "yo" },

        { hiragana: "ら", romaji: "ra" },
        { hiragana: "り", romaji: "ri" },
        { hiragana: "る", romaji: "ru" },
        { hiragana: "れ", romaji: "re" },
        { hiragana: "ろ", romaji: "ro" },

        { hiragana: "わ", romaji: "wa" },
        { hiragana: "を", romaji: "wo" },

        { hiragana: "ん", romaji: "n" },
    ]);
    const [randomWordIndex, setRandomWordIndex] = useState<number>(
        Math.floor(Math.random() * word.length)
    );

    const [isAnswerRomaji, setIsAnswerRomaji] = useState<boolean>(false);
    const [isAnswerHiragana, setIsAnswerHiragana] = useState<boolean>(false);

    const deleteByIndex = (index: number) => {
        setWord((item) => {
            return item.filter((_, i) => i !== index);
        });
    };

    const [mode, setMode] = useState<string>("romaji");

    const handleChangeAnswer = (): void => {
        if (mode === "hiragana") {
            setIsAnswerHiragana((prev) => !prev);
        } else if (mode === "romaji") {
            setIsAnswerRomaji((prev) => !prev);
        }
    };

    return (
        <Box className="flex justify-center items-center md:h-[100vh] flex-col-reverse md:flex-col gap-4 py-6">
            <Box className="flex gap-8 flex-col">
                <Box className="flex flex-col md:flex-row gap-8">
                    {(isAnswerHiragana || mode === "romaji") && (
                        <Box
                            onClick={() => {
                                const randomNumber = Math.floor(
                                    Math.random() * word.length
                                );

                                if (randomNumber >= word.length - 1) {
                                    setRandomWordIndex(randomNumber - 1);
                                } else {
                                    setRandomWordIndex(randomNumber);
                                }

                                setIsAnswerRomaji(false);
                                setIsAnswerHiragana(false);
                            }}
                            className="flex items-center justify-center bg-slate-200 rounded-3xl w-[300px] h-[300px] md:w-[600px] md:h-[600px] relative hover:bg-slate-100 cursor-pointer"
                        >
                            <Typography className="text-[250px] md:text-[500px] text-slate-600">
                                {randomWordIndex >= 0 &&
                                    word[randomWordIndex].romaji}
                            </Typography>
                            <Typography className="text-sm md:text-lg font-bold text-slate-600 absolute top-6 right-6 group-hover:text-slate-400">
                                {randomWordIndex >= 0
                                    ? word.findIndex(
                                          (item) =>
                                              item.romaji ===
                                              word[randomWordIndex].romaji
                                      )
                                    : "หมดแล้วจ้า"}
                            </Typography>
                        </Box>
                    )}

                    {(isAnswerRomaji || mode === "hiragana") && (
                        <Box
                            onClick={() => {
                                {
                                    const randomNumber = Math.floor(
                                        Math.random() * word.length
                                    );

                                    if (randomNumber >= word.length - 1) {
                                        setRandomWordIndex(randomNumber - 1);
                                    } else {
                                        setRandomWordIndex(randomNumber);
                                    }

                                    setIsAnswerRomaji(false);
                                    setIsAnswerHiragana(false);
                                }
                            }}
                            className="flex items-center justify-center bg-slate-200 rounded-3xl w-[300px] h-[300px] md:w-[600px] md:h-[600px] relative hover:bg-slate-100 cursor-pointer"
                        >
                            <Typography className="text-[250px] md:text-[500px] text-slate-600">
                                {randomWordIndex >= 0 &&
                                    word[randomWordIndex].hiragana}
                            </Typography>
                            <Typography className="text-sm md:text-lg font-bold text-slate-600 absolute top-6 right-6 group-hover:text-slate-400">
                                {randomWordIndex >= 0
                                    ? word.findIndex(
                                          (item) =>
                                              item.hiragana ===
                                              word[randomWordIndex].hiragana
                                      )
                                    : "หมดแล้วจ้า"}
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Box>

            <Box className="flex gap-4 px-6 w-full overflow-x-auto md:justify-center">
                {word.map((item, index) => (
                    <Box key={index} className="flex flex-col items-center">
                        <Typography>{index}</Typography>
                        {(isAnswerHiragana || mode === "romaji") && (
                            <Typography>{item.romaji}</Typography>
                        )}
                        {(isAnswerRomaji || mode === "hiragana") && (
                            <Typography>{item.hiragana}</Typography>
                        )}
                    </Box>
                ))}
            </Box>

            <Box className="flex flex-row md:flex-col gap-4 items-center">
                <Box className="flex gap-4">
                    <Box
                        onClick={() => setMode("romaji")}
                        className="bg-blue-600 p-2 rounded-xl w-full text-center cursor-pointer hover:bg-blue-300"
                    >
                        <Typography className="text-lg text-blue-100">
                            Romaji
                        </Typography>
                    </Box>
                    <Box
                        onClick={() => setMode("hiragana")}
                        className="bg-blue-600 p-2 rounded-xl w-full text-center cursor-pointer hover:bg-blue-300"
                    >
                        <Typography className="text-lg text-blue-100">
                            Hiragana
                        </Typography>
                    </Box>
                </Box>

                <Box className="flex gap-4">
                    <Button
                        onClick={handleChangeAnswer}
                        className="bg-green-400 rounded-xl hover:bg-green-100 group"
                    >
                        <Typography className="text-lg normal-case text-green-50 group-hover:text-green-400">
                            Answer
                        </Typography>
                    </Button>
                    <Button
                        onClick={() => {
                            deleteByIndex(randomWordIndex);

                            const randomNumber = Math.floor(
                                Math.random() * word.length
                            );

                            if (randomNumber >= word.length - 1) {
                                setRandomWordIndex(randomNumber - 1);
                            } else {
                                setRandomWordIndex(randomNumber);
                            }

                            setIsAnswerHiragana(false);
                            setIsAnswerRomaji(false);
                        }}
                        className="bg-red-400 rounded-xl hover:bg-red-100 group"
                    >
                        <Typography className="text-lg normal-case text-red-50 group-hover:text-red-400">
                            Check
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default App;
