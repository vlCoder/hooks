import React, { useState, useEffect, useMemo, useCallback, useRef, useContext, useImperativeHandle, useReducer } from 'react';

interface User {
  name: string,
  login: string,
  avatar_url: string,
  bio: string
}

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<[User]>();

  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users]);

  const greeting = useCallback(
    (user: User) => alert(`hello ${user.name}`), []
  )

  inputRef.current?.focus();


  return (
    <form>
      <input type="text" ref={inputRef} />
    </form>
  )
}

export default App;
