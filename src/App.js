import React from "react";

function Food(props) {
  const { fav } = props;
  return <h1>I like {fav}</h1>;
}
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="닭갈비" />
      <Food fav="라멘" />
      <Food fav="갈비찜" />
      <Food fav="파스타" />
    </div>
  );
}

export default App;
