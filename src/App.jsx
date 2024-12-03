import { Button } from '@/components/ui/button';
import './App.css';
import { Drawer, HStack, Input } from '@chakra-ui/react';
import { ColorModeButton } from './components/ui/color-mode';
import { LuSearch } from 'react-icons/lu';
import { InputGroup } from '@/components/ui/input-group';

import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

function App() {
  return (
    <>
      <HStack>
        <ColorModeButton />
        <InputGroup flex="1" startElement={<LuSearch />}>
          <Input placeholder="Search" />
        </InputGroup>
        <Button>Click me</Button>
        <DrawerRoot>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Button variant="outline" size="sm">
              Open Drawer
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer Title</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <DrawerActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerActionTrigger>
              <Button>Save</Button>
            </DrawerFooter>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </HStack>
    </>
  );
}

export default App;
