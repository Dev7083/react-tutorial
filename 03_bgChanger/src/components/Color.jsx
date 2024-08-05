import React from 'react';
import { useState } from 'react';
export const Color = ({ temp }) => {
    // console.log(temp);demonstrating Hooks
    const [color, setColor] = useState("olive");
    return (
        <>
            <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
            </div>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-400 px-3 py-2 rounded-xl">
                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: temp }}
                        onClick={() => setColor(temp)}>Black</button>

                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }}
                        onClick={() => setColor("green")}>Green</button>
                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }}
                        onClick={() => setColor("blue")}>Blue</button>
                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }}
                        onClick={() => setColor("red")}>Red</button>
                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }}
                        onClick={() => setColor("green")}>Green</button>
                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }}
                        onClick={() => setColor("blue")}>Blue</button>
                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }}
                        onClick={() => setColor("red")}>Red</button>
                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }}
                        onClick={() => setColor("green")}>Green</button>
                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }}
                        onClick={() => setColor("blue")}>Blue</button>
                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }}
                        onClick={() => setColor("green")}>Green</button>
                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }}
                        onClick={() => setColor("blue")}>Blue</button>
                </div>
            </div >
        </>
    );
};
