import React from "react";

const GotitButton = (props) => {
  return (
    <div>
      <button
        type="button"
        className="inline-block rounded-lg bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
        onClick={props.actions.handleGotItButton}
      >
        Got It
      </button>
    </div>
  );
};

export default GotitButton;
