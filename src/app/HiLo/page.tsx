"use client";
import { useState } from "react";
import { hiLo } from "@/components/HiLo/hilo"

type SpinResult = ReturnType<typeof hiLo>;

export default function cardGame() {
    const [result, setResult] = useState<SpinResult | null>(null);
    const [status, setStatus] = useState<null | 'win' | 'lose'>(null);
    return (
        <main>
            <div className="bg-black mt-10">
                <div className="pb-5">
                    <h1 className="flex justify-center text-white">HiLo</h1>
                </div>
                <div className="grid h-25 grid-cols-3 gap-4 flex justify-center">
                    <div className="flex justify-center pl-5">How to play
                    </div>

                    <div className="flex justify-center">Gambling guideline</div>
                    <div className="flex justify-center">Know when to stop!
                        <p> Don't</p>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="grid h-80 grid-cols-1 flex text-center text-black">
                    The game
                </h1>
                <div className="flex justify-center">
                    {result && (
                        <div className="mt-6 text-center" aria-live="polite">
                            <div className="text-4xl font-bold text-black">Your card: {result.card}</div>
                        </div>

                    )}
                    {status && (
                        <div className={status === 'win' ? 'text-green-600' : 'text-red-600'}>
                            {status === 'win' ? 'You won!' : 'You lost!'}
                        </div>
                    )}

                </div>
                <div className="flex justify-center rounded-xl">
                    <button
                        className="p-6 text-black bg-blue-400 hover:bg-sky-700 rounded-xl cursor-pointer active:bg-blue-600 mb-5"
                        onClick={() => {
                            const outcome = hiLo();
                            setResult(outcome);
                            const lost = outcome.result !== 'lower';
                            setStatus(lost ? 'lose' : 'win');
                        }}
                    >
                        Lower
                    </button>
                    <button
                        className="p-6 ml-6 text-black bg-blue-400 hover:bg-sky-700 rounded-xl cursor-pointer active:bg-blue-600 mb-5"
                        onClick={() => {
                            const outcome = hiLo();
                            setResult(outcome);
                            const lost = outcome.result !== 'higher'; // kies regel voor 'equal'
                            setStatus(lost ? 'lose' : 'win');
                        }}

                    >
                        Higher
                    </button>

                </div>
            </div>
        </main>
    )
}