import { useState } from "react";
import { TreeNode } from "./types";
import Card from "./components/Card";

function App() {
  const seedValue: TreeNode = {
    name: "Hello React",
    children: [],
  };
  const [tree, setTree] = useState<TreeNode[]>([seedValue]);

  const addToTree = (payload: string) => {
    const newNode: TreeNode = {
      name: payload,
      children: [],
    };
    setTree((prevTree) => [...prevTree, newNode]);
  };

  return (
    <div>
      {tree.map((node, idx) => {
        return (
          <Card
            onCardClick={addToTree}
            name={node.name}
            key={idx + 1 + "-node"}
          />
        );
      })}
    </div>
  );
}

export default App;
