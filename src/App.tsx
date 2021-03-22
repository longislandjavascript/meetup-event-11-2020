import React from 'react';
import { Header } from './components/Header';
import { SkipNav } from './components/SkipNav';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <SkipNav contentId="main-content"> Skip to Content</SkipNav>

      <Header />
      <main className="container flex-1 p-4 mx-auto">
        <div id="main-content">
          <h1 className="my-4 text-4xl font-medium">Tailwind Playground</h1>
          <p>Make a change to this page and watch it instantly relobbbad.</p>
        </div>
      </main>
      <Footer>
        <p className="text-base leading-5 text-white text-medium">
          My site 2020
        </p>
      </Footer>
    </div>
  );
}

export default App;
