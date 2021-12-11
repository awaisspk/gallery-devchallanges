import type {NextPage} from 'next';
import {ReactElement, ReactNode} from 'react';
import {Layout} from '@components/Layout';
import {styled} from '@stitches';
import {Profile} from '@components/Profile';
import {Flex} from '@components/Flex';
import {Gallery} from '@components/Gallery';

type HomeProps = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Wrapper = styled('div', Flex, {
  mt: '50px',
});

const Home: HomeProps = () => {
  return (
    <Wrapper flow="col" cross="center" gap="10">
      <Profile />
      <Gallery />
    </Wrapper>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout footer>{page}</Layout>;
};
