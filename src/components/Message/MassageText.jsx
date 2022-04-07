import React from 'react';

export const MassageText = (props) => {
  return (
    <>
      <div className="styleMassage">
        <h1>
          Hello React... <br />
          {props.name}
        </h1>
      </div>
    </>
  );
};
