import { Button } from '@/components/ui/button';
import { Drawer, Heading, HStack, IconButton, Input } from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';
import { LuMenu, LuSearch, LuUser } from 'react-icons/lu';
import { InputGroup } from '@/components/ui/input-group';
import s from './header.module.css';

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

const Header = () => {
  return (
    <header style={{ marginBottom: '20px' }}>
      <HStack>
        <IconButton variant="outline" aria-label="user">
          <LuMenu />
        </IconButton>
        <Heading ml={4} mr={4} size="2xl">
          I-Forms
        </Heading>
        <InputGroup flex="1" startElement={<LuSearch />}>
          <Input placeholder="Search" />
        </InputGroup>
        <ColorModeButton variant="outline" size="md" />
        <DrawerRoot>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <IconButton variant="outline" aria-label="user">
              <LuUser />
            </IconButton>
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
    </header>
  );
};

export default Header;
