import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { greetingsState, fetchGreetings } from '../redux/greetings/greetingsSlice';

function Greeting() {
  const dispatch = useDispatch();
  const { greetings, error, status } = useSelector(greetingsState);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchGreetings());
    }
  }, [dispatch, status]);

  if (status === 'succeeded') {
    return (
      <div className="greetings-list">
        {greetings.map((greeting) => {
          const {
            message, id,
          } = greeting;
          return (
            <div key={id}>
              <p>{message}</p>
            </div>
          );
        })}
      </div>
    );
  }
  if (status === 'failed') {
    return (<p>{ error }</p>);
  }
}

export default Greeting;
