import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const NavBar = () => {
  const { data: session } = useSession();

  const handleLogin = () => {
    signIn('credentials', { callbackUrl: 'http://localhost:3000/' });
  };

  const handleLogout = () => {
    signOut({ callbackUrl: 'http://localhost:3000/' });
  };

  return (
    <div className="bg-black p-5 text-white flex justify-between items-center">
      <div className="font-bold text-2xl">KINGSULTAN Gallery</div>
      {session ? (
        <button className="text-black py-1 px-2 rounded-lg font-bold bg-white" onClick={handleLogout}>
          Sign Out
        </button>
      ) : (
        <button className="text-black py-1 px-2 rounded-lg font-bold bg-white" onClick={handleLogin}>
          Log In
        </button>
      )}
    </div>
  );
};

export default NavBar;
