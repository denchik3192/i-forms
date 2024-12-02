import { useState } from 'react';
import { Button } from '@/components/ui/button';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { HStack } from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </>
  );
}

export default App;
