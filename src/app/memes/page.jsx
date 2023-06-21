"use client";

import React from "react";
import { useMemes } from "../services/api";
import { Meme } from "../meme/page";

export const Memes = () => {
    const { status, data, error } = useMemes();

    return (
        <div>
            <h1 className="text-center text-4xl font-bold my-5">
                Meme Generator
            </h1>
            {status === "loading" ? (
                <p className="text-4xl text-center">Loading...</p>
            ) : status === "error" ? (
                <p className="text-2xl text-center">Error: {error.message}</p>
            ) : (
                <main className="container w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-5">
                    {data.data.memes.map((meme) => (
                        <Meme
                            meme={meme}
                            key={meme.id}
                        />
                    ))}
                </main>
            )}
        </div>
    );
};
