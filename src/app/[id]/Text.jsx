"use client";

import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState("Double Click To Edit");
    const [fontStyle, setFontStyle] = useState("Impact");
    const [fontColor, setFontColor] = useState("text-black");
    const [fontShadow, setFontShadow] = useState("none");
    const [fontSize, setFontSize] = useState("text-2xl");
    const [letterCase, setLetterCase] = useState("title");

    const fontOptions = [
        { label: "Impact", value: "Impact" },
        { label: "Arial", value: "Arial" },
        { label: "Comic Sans MS", value: "Comic Sans MS" },
        { label: "Papyrus", value: "Papyrus" },
        { label: "Oswald", value: "Oswald" },
    ];

    const handleFontChange = (e) => {
        setFontStyle(e.target.value);
    };

    const fontColorOptions = [
        { label: "Black", value: "text-black" },
        { label: "White", value: "text-white" },
        { label: "Blue", value: "text-blue-500" },
        { label: "Red", value: "text-red-500" },
        { label: "Purple", value: "text-purple-500" },
    ];

    const handleFontColor = (e) => {
        setFontColor(e.target.value);
    };

    const fontShadowOptions = [
        { label: "None", value: "none" },
        { label: "Small", value: "2px 2px 4px rgba(0, 0, 0, 0.3)" },
        { label: "Medium", value: "4px 4px 6px rgba(0, 0, 0, 0.4)" },
        { label: "Large", value: "6px 6px 10px rgba(0, 0, 0, 0.5)" },
        { label: "Extra Large", value: "8px 8px 12px rgba(0, 0, 0, 0.6)" },
    ];

    const handleFontShadow = (e) => {
        setFontShadow(e.target.value);
    };

    const fontSizeOptions = [
        { label: "Extra Small", value: "text-sm" },
        { label: "Small", value: "text-base" },
        { label: "Semi-Small", value: "text-xl" },
        { label: "Medium", value: "text-2xl" },
        { label: "Semi-Large", value: "text-3xl" },
        { label: "Large", value: "text-4xl" },
        { label: "Extra Large", value: "text-6xl" },
    ];

    const handleFontSize = (e) => {
        setFontSize(e.target.value);
    };

    const caseOptions = [
        { label: "Lower Case", value: "lower" },
        { label: "Upper Case", value: "upper" },
        { label: "Title Case", value: "title" },
    ];

    const handleCaseChange = (e) => {
        setLetterCase(e.target.value);
        setValue(applyCase(value, e.target.value));
    };

    const applyCase = (text, caseOption) => {
        switch (caseOption) {
            case "lower":
                return text.toLowerCase();
            case "upper":
                return text.toUpperCase();
            case "title":
                return text
                    .toLowerCase()
                    .replace(/(^|\s)\S/g, (char) => char.toUpperCase());
            default:
                return text;
        }
    };

    const handleReset = () => {
        setValue("Double Click To Edit");
        setFontStyle("Impact");
        setFontColor("text-black");
        setFontShadow("none");
        setFontSize("text-2xl");
        setLetterCase("title");
    };

    const handleDoubleClick = () => {
        setEditMode(!editMode);
    };

    const handleDelete = () => {
        setEditMode(false);
        setValue(null);
    };

    return (
        <Draggable>
            {editMode ? (
                <div
                    onDoubleClick={handleDoubleClick}
                    className="bg-green-200 rounded-2xl p-5 flex flex-col drop-shadow-xl border-4 border-green-400"
                >
                    <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        style={{
                            fontFamily: fontStyle,
                            textShadow: fontShadow,
                        }}
                        className={`${fontColor} ${fontSize} px-2 rounded-lg`}
                    />
                    <div className="flex flex-col pt-1">
                        <label htmlFor="font-style">Font Style </label>
                        <select
                            value={fontStyle}
                            onChange={handleFontChange}
                            id="font-style"
                        >
                            {fontOptions.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                    style={{ fontFamily: option.value }}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col pt-1">
                        <label htmlFor="font-color">Font Color </label>
                        <select
                            value={fontColor}
                            onChange={handleFontColor}
                            id="font-color"
                        >
                            {fontColorOptions.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col pt-1">
                        <label htmlFor="font-shadow">Font Shadow </label>
                        <select
                            value={fontShadow}
                            onChange={handleFontShadow}
                            id="font-shadow"
                        >
                            {fontShadowOptions.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col pt-1">
                        <label htmlFor="font-size">Font Size </label>
                        <select
                            value={fontSize}
                            onChange={handleFontSize}
                            id="font-size"
                        >
                            {fontSizeOptions.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col pt-1">
                        <label htmlFor="letter-case">Letter Case </label>
                        <select
                            value={letterCase}
                            onChange={handleCaseChange}
                            id="letter-case"
                        >
                            {caseOptions.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        className="bg-green-400 hover:bg-green-500 py-2 px-5 mt-3 rounded-lg font-semibold"
                        onClick={handleDoubleClick}
                    >
                        Done
                    </button>
                    <button
                        className="bg-yellow-500 hover:bg-yellow-600 py-2 px-5 mt-3 rounded-lg font-semibold"
                        onClick={handleReset}
                    >
                        Reset to Default
                    </button>
                    <button
                        className="bg-red-400 hover:bg-red-500 py-2 px-5 mt-3 rounded-lg font-semibold"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            ) : (
                <div>
                    <p
                        onDoubleClick={handleDoubleClick}
                        style={{
                            fontFamily: fontStyle,
                            textShadow: fontShadow,
                        }}
                        className={`${fontColor} ${fontSize} cursor-pointer`}
                    >
                        {value}
                    </p>
                </div>
            )}
        </Draggable>
    );
};

export default Text;
