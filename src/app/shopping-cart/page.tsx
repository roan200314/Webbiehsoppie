"use client";
import { useState } from "react";
import { classifyNumber } from "@/components/board/board"

type SpinResult = ReturnType<typeof classifyNumber>;

export default function ShoppingCart() {
    const [result, setResult] = useState<SpinResult | null>(null);

    const getRandomNumber = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    const rollBall = () => getRandomNumber(0, 36);

    return (
        <main>
            <div className="bg-black mt-10">
                <div className="pb-5">
                    <h1 className="flex justify-center text-white">Roulette</h1>
                </div>
                <div className="grid h-25 grid-cols-3 gap-4 flex justify-center">
                    <div className="flex justify-center pl-5">How to play
                    </div>

                    <div className="flex justify-center">Gambling guideline</div>
                    <div className="flex justify-center">Know when to stop!</div>
                </div>
            </div>
            <div>
                <h1 className="grid h-80 grid-cols-1 flex text-center text-black">
                    The game
                </h1>
                <div>
                    {result && (
                        <div className="mt-6 text-center" aria-live="polite">
                            <div className="text-4xl font-bold text-black">{result.number}</div>
                            <div
                                className={
                                    result.color == "red"
                                        ? "text-red-600"
                                        : result.color == "black"
                                            ? "text-gray-900"
                                            : "text-green-600"
                                }
                            >
                                {result.color.toUpperCase()}
                            </div>
                            <div className="opacity-70 text-black">{result.parity}</div>
                        </div>
                    )}
                </div>
                <div className="flex justify-center rounded-xl">
                    <button
                        className="p-6 text-black bg-blue-400"
                        onClick={() => {
                            const n = rollBall();
                            const info = classifyNumber(n);
                            setResult(info);
                            console.log(info);
                        }}
                    >
                        Gamble!
                    </button>

                </div>
            </div>
        </main>
    )
}