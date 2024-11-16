import React from 'react';
import Emails from '../../components/Emails';

export default function contact() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-3xl">
        <Emails />
      </div>
    </div>
  );
}
