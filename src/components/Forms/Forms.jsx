import React, { useState, useCallback, useEffect } from 'react';

import './Forms.scss';

const Forms = ({ config }) => {
  const [status, setStatus] = useState('idle');
  // const [user, setUser] = useState(null);

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
    } else {
      setStatus('rejected');
    }
    if (status === 'resolved' && config.title === 'Login') {
      console.log('set user data to store');
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
