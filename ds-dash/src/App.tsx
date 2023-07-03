import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { MenuPage } from './pages/MenuPage';
import { CategoryPage } from './pages/CategoryPage';
import { GuildPrefixPage } from './pages/GuildPrefixPage';
import { WelcomeMessagePage } from './pages/WelcomeMessagePage';
import { GuildContext } from './utils/contexts/GuildContext'
import { AppBar } from './components/AppBar'
import { useFetchUser } from './utils/hooks/useFetchUser';

import { Spinner } from './components/Spinner';
import { BarLoader } from 'react-spinners';
import { PartialGuild } from './utils/types';


function App() {
  const [guild, setGuild] = useState<PartialGuild>();
  const {user, loading, error } = useFetchUser();
  const updateGuild = (guild: PartialGuild) => setGuild(guild);

  if(loading) return <Spinner />;
  return (
    <GuildContext.Provider value={{ guild, updateGuild }}>
      {
        user && !error ?(
          <>
          <Routes>
            <Route path="/dashboard/*" element={<AppBar/>} />
            </Routes>
            <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/dashboard/categories" element={<CategoryPage />} />
            <Route path="/dashboard/settings" element={<GuildPrefixPage />} />
            <Route path="/dashboard/message" element={<WelcomeMessagePage />} />
              </Routes>
              </>

      ) : (
        <Routes>
        <Route path="/" element={<LoginPage />} />

          </Routes>
      )}

    </GuildContext.Provider>
  );
}

export default App;
