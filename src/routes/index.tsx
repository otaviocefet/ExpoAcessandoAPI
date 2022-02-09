import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {useAuth} from '../contexts/auth';

import AuthRoutes from '../routes/auth.routes';
import AppRoutes from '../routes/app.routes';

const Routes: React.FC = () => {
    const { access_token } = useAuth();
    return(
        <NavigationContainer>
             {access_token ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
    
    
};

export default Routes;