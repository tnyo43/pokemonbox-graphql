import { FC } from 'react';
import { usePokedexesQuery } from './index.generated';

export const Pokedex: FC = () => {
  const [{ data }] = usePokedexesQuery();

  if (!data) return <p>loading</p>;

  return (
    <div>
      {data.pokedexes.map((pokedexCollection, idx) => {
        return <div key={idx}>{pokedexCollection.name}</div>;
      })}
    </div>
  );
};
