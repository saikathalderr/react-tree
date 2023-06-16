import { nanoid } from "nanoid";
import { useState } from "react";

import { NodePayload, TreeNode } from "./types";
import Card from "./components/Card";

function bfs(id: string, tree: TreeNode | TreeNode[], node: TreeNode) {
  const queue: TreeNode[] = [];

  queue.unshift(tree as TreeNode);

  while (queue.length > 0) {
    const curNode = queue.pop();

    if (!curNode) {
      return;
    }

    if (curNode.id === id) {
      curNode.children.push(node);

      return { ...tree };
    }

    const len = curNode.children.length;

    for (let i = 0; i < len; i++) {
      queue.unshift(curNode.children[i]);
    }
  }
}

function App() {
  const seedValue: TreeNode = {
    id: nanoid(),
    name: "Root",
    children: [],
  };
  const [tree, setTree] = useState<TreeNode | TreeNode[]>(seedValue);

  const addToTree = (payload: NodePayload) => {
    const { name, parentId } = payload;

    const newTree = bfs(parentId, tree, {
      id: nanoid(),
      name,
      children: [],
    } as TreeNode);

    if (newTree) {
      setTree(newTree);
    }
  };

  return (
    <div className="p-10">
      <div className="flex flex-col justify-start items-start">
        {tree && (
          <Card
            onCardClick={addToTree}
            children={(tree as TreeNode).children}
            name={(tree as TreeNode).name}
            id={(tree as TreeNode).id}
            key={(tree as TreeNode).id}
          />
        )}
      </div>
    </div>
  );
}

export default App;
