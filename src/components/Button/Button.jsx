import React, { useCallback } from 'react';

import './Button.scss';

function Button({
  text = 'DEFAULT',
  theme = 'white',
  size = 'small',
  callback = () => {},
}) {
  const handleButton = useCallback(() => {
    callback();
  }, []);

  return (
    <button
      type="button"
      className={`btn_${theme} btn_${size}`}
      onClick={handleButton}
    >
      {text}
    </button>
  );
}

export default Button;
