import { redirect } from 'next/navigation';
import React from 'react';

const page = () => {
  redirect('/home');
};

export default page;
