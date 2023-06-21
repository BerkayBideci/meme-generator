"use client";

import React, { useState, createRef } from "react";
import { useMemes } from "../services/api";
import Text from "./Text";
import Link from "next/link";
import { exportComponentAsJPEG } from "react-component-export-image";
import { v4 as uuidv4 } from "uuid";

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
            <h1 className="text-center text-4xl font-bold my-5">Edit Meme</h1>
            {status === "loading" ? (
                <p className="text-4xl text-center">Loading...</p>
            ) : status === "error" ? (
                <p className="text-2xl text-center">Error: {error.message}</p>
            ) : (
                meme && (
                    <>
                        <main className="container w-11/12 mx-auto mb-5">
                            <div
                                key={meme.name}
                                className="flex flex-col justify-center items-stretch rounded-2xl my-2"
                            >
                                <Link
                                    href="/"
                                    className="bg-green-400 hover:bg-green-500 w-[14rem] mx-auto py-2 px-5 my-2 rounded-lg font-semibold text-center"
                                >
                                    Back to All Memes
                                </Link>
                                <button
                                    onClick={handleAddText}
                                    className="bg-green-400 hover:bg-green-500 w-[14rem] mx-auto py-2 px-5 my-2 rounded-lg font-semibold"
                                >
                                    Add Draggable Text
                                </button>
                                <button
                                    className="bg-green-400 hover:bg-green-500 w-[14rem] mx-auto py-2 px-5 my-2 rounded-lg font-semibold"
                                    onClick={(e) => {
                                        exportComponentAsJPEG(memeRef);
                                    }}
                                >
                                    Save
                                </button>
                            </div>
                            <div
                                ref={memeRef}
                                key={meme.id}
                                className="flex flex-col justify-center items-center meme"
                            >
                                <img
                                    src={meme.url}
                                    alt={meme.name}
                                    className="h-80 sm:h-[34rem] p-5"
                                />
                                {Array(count)
                                    .fill(0)
                                    .map((e) => (
                                        <Text key={uuidv4()} />
                                    ))}
                            </div>
                        </main>
                    </>
                )
            )}
        </div>
    );
};

export default EditPage;
