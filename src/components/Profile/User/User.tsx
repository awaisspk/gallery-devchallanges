import {Box} from '@components/Box';
import {Flex} from '@components/Flex';
import {H3, Paragraph} from '@components/Typography';
import Image from 'next/image';

export const User = () => {
  return (
    <Flex flow="col" gap="1" center>
      <Box
        css={{
          borderRadius: '1em',
          width: '100px',
          height: '100px',
          position: 'relative',
          overflow: 'hidden',
          '@bp3': {
            width: '150px',
            height: '150px',
          },
        }}
      >
        <Image
          layout="fill"
          objectFit="cover"
          src="/images/profilePhoto.png"
          width={150}
          height={150}
          alt="profile image"
        />
      </Box>
      <Flex flow="col" center>
        <H3 css={{color: 'rgba(78, 81, 80, 1)'}}>Rodney Cotton</H3>
        <Paragraph css={{color: 'rgba(169, 169, 169, 1)', fontSize: '$1'}}>
          Helsinki Finland
        </Paragraph>
      </Flex>
    </Flex>
  );
};
