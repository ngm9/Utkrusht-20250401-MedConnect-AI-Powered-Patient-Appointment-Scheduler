import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MedConnect - AI-Powered Appointment Scheduler</title>
        <meta name="description" content="Find the right doctor based on your symptoms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to MedConnect</h1>
        <p>The intelligent way to find the right specialist and schedule appointments</p>
        
        {/* TODO: Add main content components */}
        {/* TODO: Add authentication flow */}
        {/* TODO: Add symptom input form */}
        {/* TODO: Add specialty recommendation display */}
        {/* TODO: Add doctor selection and appointment booking */}
      </main>
    </div>
  );
}
