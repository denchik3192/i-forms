import { Button, Center, Fieldset, Input, Stack } from '@chakra-ui/react';
import { Field } from '@/components/ui/field';

const Auth = () => {
  return (
    <Center>
      <Fieldset.Root size="lg" maxW="md">
        <Stack>
          <Fieldset.Legend>Log in</Fieldset.Legend>
        </Stack>

        <Fieldset.Content>
          <Field label="Email address">
            <Input name="email" type="email" />
          </Field>
          <Field label="Password">
            <Input name="password" type="password" />
          </Field>
        </Fieldset.Content>

        <Button type="submit" alignSelf="flex-start">
          Submit
        </Button>
      </Fieldset.Root>
    </Center>
  );
};

export default Auth;
