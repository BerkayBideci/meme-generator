import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState("Double Click to Edit");
    return (
        <Draggable>
            {editMode ? (
                <input
                    value={value}
                    onDoubleClick={(e) => setEditMode(false)}
                    onChange={(e) => setValue(e.target.value)}
                />
            ) : (
                <h1 onDoubleClick={(e) => setEditMode(true)}>{value}</h1>
            )}
        </Draggable>
    );
};

export default Text;
