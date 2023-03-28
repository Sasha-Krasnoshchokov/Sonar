import React, { useState, useCallback, useEffect } from 'react';

import avatar from '../../assets/icon_png/avatar.png';

import './Forms.scss';

const Forms = ({ config, callback }) => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    let isFormCorrect = true;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < event.target.length; i++) {
      if (!event.target[i].value) {
        isFormCorrect = false;
        break;
      }
    }
    if (isFormCorrect) {
      setStatus('pending');
      setTimeout(() => {
        setStatus('resolved');
      }, 500);
      setTimeout(() => {
        const user = {
          avatar,
          name: (config.title === 'Sign Up' ? event.target[0].value : 'Tom'),
          email: (config.title === 'Sign Up'
            ? event.target[1].value
            : event.target[0].value),
        };
        callback(user);
      }, 1500);
    } else {
      setStatus('rejected');
    }
  }, []);

  useEffect(() => {
    const [body] = document.getElementsByTagName('body');
    body.style.overflowY = 'hidden';

    return () => { body.style.overflowY = 'scroll'; };
  }, []);

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2 className={`form_title form_title__${status}`}>{config.title}</h2>

      {(config.fields && config.fields.length > 0) && (
        config.fields.map((field) => (
          <React.Fragment key={field.label}>
            <label htmlFor={field.type} className="form_label">
              {field.label}
              <input
                name={field.type}
                type={field.type}
                placeholder={`Input ${field.label}`}
                className="form_input"
              />
            </label>
          </React.Fragment>
        ))
      )}

      <input type="submit" className="form_button" value={config.button} />
    </form>
  );
};

export default Forms;
