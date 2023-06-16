import { useState } from "react";
import { NodePayload, TreeNode } from "../types";

type CardProps = {
  name: string;
  id: string;
  children?: TreeNode[];
  onCardClick: (payload: NodePayload) => void;
};

function Card(props: CardProps) {
  const { name, id, children, onCardClick } = props;
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;
    const payload: NodePayload = {
      name: text.trim(),
      parentId: id,
    };
    onCardClick(payload);
    setText("");
  };

  return (
    <>
      <div className="bg-white px-4 py-3 shadow-lg rounded-lg w-fit m-2">
        <p className="font-mono font-bold text-slate-400 text-left text-xs pb-1">
          {name}
        </p>
        <div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              className="font-mono font-bold text-slate-700 text-left text-xs bg-slate-100 px-2 py-1 rounded-lg"
              placeholder="type...."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="bg-slate-100 px-2 rounded-lg text-slate-400"
              type="submit"
            >
              +
            </button>
          </form>
        </div>
      </div>

      <div className={`pl-20`}>
        {children &&
          children.map((child) => (
            <Card
              key={child.id}
              children={child.children}
              name={child.name}
              id={child.id}
              onCardClick={onCardClick}
            />
          ))}
      </div>
    </>
  );
}

export default Card;
