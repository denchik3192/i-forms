import { Box, Card, Center, HStack } from '@chakra-ui/react';
import './App.css';

import Header from './components/header/header';
import { LuPlus } from 'react-icons/lu';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <main>
        {/* <HStack>
          <Box border={'1px solid white'} cursor={'pointer'}>
            <LuPlus size={40} />
          </Box>
        </HStack> */}
      </main>
    </>
  );
}

export default App;
