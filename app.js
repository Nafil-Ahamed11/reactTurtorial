const heading = React.createElement("div",{id:'parant'},
React.createElement("div",{id:'child'},
[React.createElement("h1",{},"Iam an h1 tags"),React.createElement("h2",{},"Iam an h2 tags")])
);
     const root = ReactDOM.createRoot(document.getElementById('root'));
     root.render(heading);