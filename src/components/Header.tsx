import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';
import { Header_user$key } from './__generated__/Header_user.graphql';

export interface HeaderProps {
  user: Header_user$key;
}

const Header: React.SFC<HeaderProps> = ({ user }) => {
  const data = useFragment(
    graphql`
      fragment Header_user on User {
        name
      }
    `,
    user
  );

  return (
    <div style={{ backgroundColor: 'lightblue', padding: '5px' }}>
      <p>{data?.name}</p>
    </div>
  );
};

export default Header;
