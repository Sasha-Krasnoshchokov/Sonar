import React, { useCallback, useEffect } from 'react';

import './PopUp.scss';

function PopUp({ callback = () => {}, children }) {
  const handleShutter = useCallback(() => {
    callback();
  }, [callback]);

  useEffect(() => {
    const [body] = document.getElementsByTagName('body');
    body.style.overflowY = 'hidden';

    return () => { body.style.overflowY = 'scroll'; };
  }, []);

  return (
    <div id="popup" className="popup">
      <div id="popup" className="popup popup__bg" />
      <div id="popup" className="popup_content">
        <button type="button" className="popup__shutter" onClick={handleShutter} />
        {children}
      </div>
    </div>
  );
}

export default PopUp;
