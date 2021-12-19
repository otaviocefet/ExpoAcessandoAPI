import React from "react";
import {Routes} from "./src/routes";
import { Provider as PaperProvider} from 'react-native-paper';
import { AuthProvider } from "./src/hook/auth";


const App = () => {
  return (
      <PaperProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </PaperProvider>
    
  );
};

export default App;