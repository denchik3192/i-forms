import { Box, Card, Center, HStack } from '@chakra-ui/react';
import './App.css';

import Header from './components/header/header';
import { LuPlus } from 'react-icons/lu';

function App() {
  return (
    <>
      <Header />
      <main>
        <HStack>
          <Box border={'1px solid white'} cursor={'pointer'}>
            <LuPlus size={40} />
          </Box>
        </HStack>
      </main>
    </>
  );
}

export default App;
