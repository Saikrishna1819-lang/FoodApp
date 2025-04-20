const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"my name is Sai Krishna"),
            React.createElement("h2",{},"my name is raja")
        ]
    ),
,React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"my name is Sai Krishna"),
        React.createElement("h2",{},"my name is raja")
    ])]
);

const heading=React.createElement("h1",{id:"heading"},"Hello World");
const root=ReactDOM.createRoot(document.getElementById("sai"));

root.render(parent);