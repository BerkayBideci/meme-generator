import React from "react";
import Link from "next/link";

export const Meme = ({ meme }) => {
    // const convertUrl = (url) => {
    //     const startIndex = url.indexOf("//") + 2;
    //     return url.substring(startIndex);
    // };

    // const imageUrl = meme.url;
    // const convertedUrl = convertUrl(imageUrl);

    return (
        <div
            key={meme.id}
            className="bg-green-100 flex flex-col justify-center items-center rounded-2xl"
        >
            <h1 className="text-2xl font-bold my-2">{meme.name}</h1>
            <img
                src={meme.url}
                alt={meme.name}
                className="h-96 p-5"
            />
            <Link
                href={`/${meme.id}`}
                className="bg-green-400 py-2 px-5 my-2 rounded-lg font-semibold"
            >
                Edit
            </Link>
        </div>
    );
};
