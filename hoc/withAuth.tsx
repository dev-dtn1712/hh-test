// pages/withAuth.tsx
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';

const withAuth = (WrappedComponent: React.FC) => {
  const RequireAuth: React.FC = (props) => {
    const { name } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!name) {
        router.push('/login');
      }
    }, [name, router]);

    return name ? <WrappedComponent {...props} /> : null;
  };

  return RequireAuth;
};

export default withAuth;
