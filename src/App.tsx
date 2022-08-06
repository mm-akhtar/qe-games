import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const Home = React.lazy(() => import('./pages/Home'))
const Game = React.lazy(() => import('./pages/Game'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />}>
          </Route>
          <Route path='/home' element={<Home />}>
          </Route>
          <Route path='/game' element={<Game />}>
          </Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
