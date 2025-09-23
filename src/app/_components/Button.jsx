export const Button = (props) => {
  const { isContinue, text } = props;
  if (isContinue) {
    return (
      <button className="bg-black text-white w-[280px] px-6 py-2 rounded-md">
        {text}
      </button>
    );
  } else {
    return (
      <div>
        <button className="w-[128px] px-6 py-2 border-[1px] rounded-md border-gray-400">
          {text}
        </button>
      </div>
    );
  }
};
