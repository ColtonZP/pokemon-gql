import { useState } from 'react';

export const Login = ({ changeUser }) => {
  const [user, updateUser] = useState('');
  const [password, updatePassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (user === 'admin' && password === 'admin') {
      changeUser(user, true);
    }
  };

  return (
    <div className="login page">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user}
          onChange={e => updateUser(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => updatePassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
