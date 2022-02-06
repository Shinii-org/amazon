import React, { useEffect } from 'react';
import Header from '../components/Header';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

function success() {
  const router = useRouter();
  useEffect(() => {
    router.push('/orders'), undefined, { shallow: true };
  }, []);
  useEffect(() => {}, [router.query.counter]);

  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto ">
        <div className="flex flex-col p-10 bg-white ">
          <div className="flex items-center space-x-2 mb-5 ">
            <CheckCircleIcon className="h-10" fill="#22c55e" />
            <h1 className="text-3xl ">
              Thank you, your order has been confirmed
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We'll send a confirmation once your
            items has shipped.
          </p>
          <button onClick={() => router.push('/')} className="button mt-8">
            Go to the main page
          </button>
        </div>
      </main>
    </div>
  );
}

export default success;
