"use client";

import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useMemes } from "../services/api";
import { Meme } from "../meme/page";

export const Memes = () => {
    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = useMemes();

    return (
        <div>
            <h1 className="text-center text-4xl font-bold my-2">
                Meme Generator
            </h1>
            <main className="container w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
                {status === "loading" ? (
                    "Loading..."
                ) : status === "error" ? (
                    <span>Error: {error.message}</span>
                ) : (
                    data.data.memes.map((meme) => {
                        return (
                            <Meme
                                meme={meme}
                                key={meme.id}
                            />
                        );
                    })
                )}
            </main>
        </div>
    );
};
