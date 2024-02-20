import { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios'
import Pokemon from '../types/PokemonType';
import { useParams } from 'react-router-dom';
import {default as PaginationType} from '../types/Pagination';
import Pagination from '../components/Pagination';
import AppLayout from '../layouts/app.layout';

const GET_TYPES_URL = 'https://pokeapi.co/api/v2/type';
const GET_IMAGES_URL = 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world';

export async function getPokemons (type: string) {
    const pokemons: Pokemon[] = [];
    await axios.get(`${GET_TYPES_URL}/${type}/?limit=20&offset=20`).then(response => {
      response.data.pokemon.map((pokemon: Pokemon) => {
        // @ts-expect-error response.data.pokemon.pokemon.map throws an error "map is not a function"
        // sometimes, so it's needed to ignore typescript error
        pokemon.pokemon.image = `${GET_IMAGES_URL}/${pokemon.pokemon.url.split('/')[6]}.svg`;
        // @ts-expect-error reason up
        if (pokemon.pokemon) pokemons.push(pokemon.pokemon);
      });
    }).catch(error => {
      if (error.request.status == 404) {
        alert('Type not found, redirecting to types page');
        window.location.href = `/`;
      }
    });
    return pokemons;
}

/**
 * Renders a page that displays a list of pokemons based on a specific type.
 * 
 * @returns The Types component.
 */
export default function Types() {
  const { type } = useParams<{ type: string }>();
  
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);
  const [pokemonsList, setPokemonsList] = useState<Pokemon[] | null>(null);
  const [pagination, setPagination] = useState<PaginationType>({
    actualPage: 1,
    totalPages: 1,
    nextPage: 2,
    previousPage: 1,
    totalItems: 0,
    itemsPerPage: 10,
  });
  
  useEffect(() => {
    getPokemons(type!)
      .then(response => {
        setPokemons(response);        
        setPagination({
          actualPage: 1,
          totalPages: Math.ceil(response.length / 10),
          nextPage: response.length > 10 ? 2 : 1,
          previousPage: 1,
          totalItems: response.length,
          itemsPerPage: 10,
        });
        setPokemonsList(response.slice(0, 10 * pagination.actualPage));
      });
  }, []);

  useEffect(() => setPage(), [pagination.actualPage]);

  const setPage = () => {
    if(pagination.totalPages > 1) {
      setPokemonsList(pokemons!.slice(10 * pagination.actualPage - 10, 10 * pagination.actualPage));
    }
  }

  if (!pokemons) return <img src="/src/assets/images/loading.png" alt="loading" className="w-32 mx-auto loader" />

  return (
    <AppLayout pageTitle={`${type!.charAt(0).toUpperCase() + type!.slice(1)} pokemons`} pageIcon="/src/assets/images/logo.png" backAction>
      {/* pokemons list */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {pokemonsList?.map((pokemon, index) => {
          return (
            <Card
              key={index} 
              title={pokemon.name} 
              image={pokemon.image} 
              className='mx-auto' />
          )
        })}
      </div>

      {/* pagination */}
      {pagination.totalPages > 1 && (
        <Pagination pagination={pagination} setPagination={setPagination} />
      )}
    </AppLayout>
  )
}
