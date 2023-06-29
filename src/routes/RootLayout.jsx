import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <hr />
      <Footer />
    </>
  );
};

export default RootLayout;
