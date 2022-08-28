import { gql } from 'urql';
import { client } from '~/client';

const App = () => {
  return <div>Hello Next.js</div>;
};

export const getStaticProps = async () => {
  const PokemonQuery = gql`
    {
      pokedex(where: { no: 1 }) {
        no
        name
        type
      }
    }
  `;

  const { data } = await client.query(PokemonQuery, {}).toPromise();
  console.log('props', data);
  return {
    props: data
  };
};

export default App;
