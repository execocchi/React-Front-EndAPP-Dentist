/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from 'react-router-dom';

import DentistList from '../components/DentistList';

const Home = () => {
  const data = useLoaderData();

  return <DentistList data={data} />;
};

export default Home;

export const loader = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not fetch data' }), {
      status: 500,
    });
  } else {
    return response;
  }
};
