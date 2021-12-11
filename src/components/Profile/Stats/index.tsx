import {Flex} from '@components/Flex';
import {styled} from '@stitches';
import {Text} from '@components/Typography';

const StyledCard = styled('div', {
  backgroundColor: 'rgba(229, 229, 229, 1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',

  width: '80px',
  height: '50px',
  '@bp2': {
    width: '100px',
    height: '60px',
  },
});

type CardProps = {
  count: number;
  label: string;
};

const Card = ({count, label}: CardProps) => {
  return (
    <StyledCard>
      <Text css={{fontSize: '0.9rem'}}>{count}</Text>
      <Text css={{fontSize: '0.8rem', color: 'rgba(189, 189, 189, 1)'}}>
        {label}
      </Text>
    </StyledCard>
  );
};

export const UserStats = () => {
  return (
    <Flex gap="3">
      <Card count={100} label="posts" />
      <Card count={2242} label="Follower" />
      <Card count={1432} label="Following" />
    </Flex>
  );
};
