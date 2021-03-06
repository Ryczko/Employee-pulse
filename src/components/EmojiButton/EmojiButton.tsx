import React from 'react';
import Emoji from '../Emoji';

interface EmojiButtonProps {
  icon: string;
  selected?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function EmojiButton({
  icon,
  onClick,
  selected = false,
}: EmojiButtonProps & React.HTMLProps<HTMLButtonElement>) {
  return (
    <button
      className={`bg-white text-3xl p-3 border-4 border-transparent rounded-lg duration-100  shadow ${
        selected ? 'scale-90 border-slate-300' : ''
      }`}
      onClick={onClick}
    >
      <Emoji symbol={icon} />
    </button>
  );
}

export default EmojiButton;
