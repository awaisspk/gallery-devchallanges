import {Flex} from '@components/Flex';
import {UserStats} from './Stats';
import {User} from './User';

export const Profile = () => {
  return (
    <Flex flow="col" center gap="4">
      <User />
      <UserStats />
    </Flex>
  );
};
