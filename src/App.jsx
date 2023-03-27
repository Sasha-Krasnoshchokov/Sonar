import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { set } from './store/slices/popUpSlice';

import popUpContents from './data/popUpContents';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PopUp from './components/PopUp/PopUp';
import Forms from './components/Forms/Forms';

function App() {
  const dispatch = useDispatch();
  const popUpConfig = useSelector((state) => state.popUpConfig);
  const { title: content } = popUpConfig;

  const [config, setConfig] = useState(null);

  const closePopUp = useCallback(() => {
    dispatch(set({
      isOpen: false,
      title: '',
    }));
  }, [dispatch, set]);

  useEffect(() => {
    if (content) {
      setConfig(popUpContents[content]);
    }
  }, [content]);

  return (
    <>
      {popUpConfig.isOpen && config && (
        <PopUp
          callback={closePopUp}
        >
          {config.content === 'forms' && (
            <Forms config={config} />
          )}
        </PopUp>
      )}
      <Header />
      <Main />
    </>
  );
}

export default App;
