import { IconHourglassHigh } from '@tabler/icons-react';
import React from 'react';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import LoginInfo from './LoginInfo';

export default async function Navbar() {
  const session = await getServerSession();
  return (
    <header
      className={`text-white backdrop-blur-lg flex fixed transition-all ease-in-out duration-300 items-center justify-between w-full p-4 md:px-40 lg:px-96`}
    >
      <div className="flex space-x-1 items-center">
        <IconHourglassHigh />
        <h1 className="font-bold text-2xl">Pomolite</h1>
      </div>
      {!session?.user ? (
        <LoginInfo />
      ) : (
        <div className="flex items-center justify-center space-x-2">
          <span className="text-sm font-semibold">{session.user.name}</span>
          {session.user.image && (
            <Image
              src={session.user.image}
              alt={session.user.image}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
        </div>
      )}
    </header>
  );
}
