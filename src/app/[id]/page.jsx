"use client";
import React, { useState, createRef } from "react";
import { useMemes } from "../services/api";
import Text from "./Text";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage = ({ params }) => {
    const { status, data, error, isFetching } = useMemes();
    const [count, setCount] = useState(0);
    const meme = data?.data?.memes?.find((meme) => meme.id === params.id);
    const memeRef = createRef();

    const handleAddText = () => {
        setCount((prevState) => prevState + 1);
    };

    return (
        <div>
            <h1 className="text-center text-4xl font-bold my-2">Edit Meme</h1>
            <main className="container w-11/12 mx-auto">
                {status === "loading" ? (
                    "Loading..."
                ) : status === "error" ? (
                    <span>Error: {error.message}</span>
                ) : (
                    meme && (
                        <>
                            <div
                                ref={memeRef}
                                key={meme.id}
                                className="bg-green-100 flex flex-col justify-center items-center rounded-2xl meme"
                            >
                                <img
                                    src={meme.url}
                                    alt={meme.name}
                                    className="h-[34rem] p-5"
                                />
                                {Array(count)
                                    .fill(0)
                                    .map((e) => (
                                        <Text />
                                    ))}
                            </div>
                            <div
                                key={meme.name}
                                className="bg-green-200 flex flex-col justify-center items-center rounded-2xl mt-2"
                            >
                                <button onClick={handleAddText}>
                                    Add Text
                                </button>
                                <button
                                    onClick={(e) => {
                                        exportComponentAsJPEG(memeRef);
                                    }}
                                >
                                    Save
                                </button>
                            </div>
                        </>
                    )
                )}
            </main>
        </div>
    );
};

export default EditPage;
