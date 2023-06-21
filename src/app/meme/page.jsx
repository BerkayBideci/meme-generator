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
            className="bg-green-200 flex flex-col justify-between items-center rounded-2xl drop-shadow-xl"
        >
            <h1 className="text-xl font-bold m-4 text-center">{meme.name}</h1>
            <img
                src={meme.url}
                alt={meme.name}
                className="h-48 p-5"
            />
            <Link
                href={`/${meme.id}`}
                className="bg-green-400 py-2 px-5 m-4 rounded-lg font-semibold"
            >
                Edit
            </Link>
        </div>
    );
};
