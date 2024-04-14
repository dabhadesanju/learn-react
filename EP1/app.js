// const rHeading = React.createElement("h1",{},"hello React");
// const rhead = ReactDOM.createRoot(document.getElementById("rRoot"));
// rhead.render(rHeading);

//Html structure
{/* <div id="parent">
    <div id="child1">
        <h1>"hi ch1"</h1>
        <h2>"h2 ch1"</h2>
    </div>
    <div id="child2">
        <h1>"hi ch2"</h1>
        <h2>"h2 ch2"</h2>
    </div>
</div> */}

// converting above html in core react
const Parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
       React.createElement("h1",{}, "hi ch1"),
       React.createElement("h2",{}, "hi ch1")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{}, "hi ch2"),
        React.createElement("h2",{}, "hi ch2")
     ])
]);

const rhead = ReactDOM.createRoot(document.getElementById("rRoot"));
rhead.render(Parent);
