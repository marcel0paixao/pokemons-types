import { useEffect, useState } from 'react';
import Card from '../components/Card';
import PokemonType from '../types/PokemonType';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import AppLayout from '../layouts/app.layout';

const GET_TYPES_URL = 'https://pokeapi.co/api/v2/type';
const GET_IMAGES_URL = 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world';
const TYPE_ROUTE = '/pokemon-type'

/**
 * Retrieves the list of Pokemon types from the server.
 * @returns {Promise<PokemonType[]>} A promise that resolves to an array of Pokemon types.
 */
const getTypes = async () => await axios.get(GET_TYPES_URL).then(response => {
  const types: PokemonType[] = [];
  response.data.results.map((type: PokemonType) => {
    // if name == unknown or shadow, skip
    if (type.name === 'unknown' || type.name === 'shadow') return;

    const id = type.url.split('/')[6];
    type.image = `${GET_IMAGES_URL}/${id}.svg`;
    types.push(type);
  });
  return types;
});

/**
 * Renders a page displaying Pokemon types.
 * @returns The Types component.
 */
export default function Types() {
  const [types, setTypes] = useState<PokemonType[] | null>(null);
  const navigate = useNavigate();

  /**
   * Handles the redirect to the specified type.
   * @param type - The type to redirect to.
   */
  const handleRedirect = (type: string) => navigate(`${TYPE_ROUTE}/${type}`);

  useEffect(() => {
    getTypes().then(response => setTypes(response));
  }, []);

  if (!types) return <img src="/src/assets/images/loading.png" alt="loading" className="w-32 mx-auto loader" />

  return (
    <AppLayout pageTitle="Pokemon types" pageIcon="/src/assets/images/logo.png">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {types?.map((type, index) => {
          return (
            <Card
              key={index} 
              title={type.name} 
              image={type.image} 
              className='mx-auto'
              buttonAction={() => handleRedirect(type.name)}
              button={`Go to ${type.name} pokemons`} />
          )
        })}
      </div>
    </AppLayout>
  )
}
