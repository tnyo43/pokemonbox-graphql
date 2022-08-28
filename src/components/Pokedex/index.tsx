import Image from 'next/image';
import { FC } from 'react';
import { usePokedexesQuery } from './index.generated';
import * as styles from './index.style';

export const Pokedex: FC = () => {
  const [{ data }] = usePokedexesQuery();

  if (!data) return <p>loading</p>;

  return (
    <div css={styles.container}>
      {data.pokedexes.map((pokedexCollection, idx) => {
        return (
          <div key={idx} css={styles.item}>
            <div>
              <div>No: {pokedexCollection.no}</div>
              <div>name: {pokedexCollection.name}</div>
              <div>
                type:
                {pokedexCollection.type.map((typeName, typeIndex) => (
                  <span
                    key={typeIndex}
                    css={[styles.typeTag, styles.typeTagColors[typeName]]}
                  >
                    {typeName}
                  </span>
                ))}
              </div>
              <div css={styles.imageFrame}>
                <div css={styles.imageWrapper}>
                  <Image
                    width={96}
                    height={96}
                    src={pokedexCollection.image}
                    alt={pokedexCollection.name}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
