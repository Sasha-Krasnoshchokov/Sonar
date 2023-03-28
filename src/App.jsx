import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPopUp } from './store/slices/popUpSlice';
import { setUser } from './store/slices/userSlice';

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
    dispatch(setPopUp({
      isOpen: false,
      title: '',
    }));
  }, [dispatch, setPopUp]);

  const getUser = useCallback((user) => {
    dispatch(setUser({ ...user }));
    closePopUp();
  }, [dispatch, setUser]);

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
            <Forms config={config} callback={getUser} />
          )}
        </PopUp>
      )}
      <Header />
      <Main />
    </>
  );
}

export default App;
