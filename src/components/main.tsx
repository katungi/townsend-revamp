import React from "react";

const MainComponent = React.memo(() => {
    return (
        <div className="wrapper-component">
            <h1 style={{
                textAlign: "center",
                color: "blue",
            }}>React App</h1>
            <p>React App with TypeScript</p>
        </div>
    );
});

export default MainComponent;
