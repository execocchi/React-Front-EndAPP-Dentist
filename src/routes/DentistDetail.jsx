/* eslint-disable no-unused-vars */
import { useLoaderData } from 'react-router-dom';

import Dentist from '../components/Dentist';

const DentistDetail = () => {
  const data = useLoaderData();

  return <Dentist data={data} />;
};

export default DentistDetail;

export const loader = async ({ request, params }) => {
  const id = params.dentistId;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: `Could not fetch dentist details for id:${id}`,
      }),
      { status: 500 }
    );
  } else {
    return response;
  }
};
