import { useState } from "react";

type CardProps = {
  name: string;
  onCardClick: (text: string) => void;
};

function Card(props: CardProps) {
  const { name, onCardClick } = props;
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;
    onCardClick(text);
  };

  return (
    <div>
      <div>
        {name}
        <div>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="type...."
              value={text}
              onChange={(e) => setText(e.target.value.trim())}
            />
            <button type="submit">+</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Card;
