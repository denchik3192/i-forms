import {
  Badge,
  Card,
  CheckboxGroup,
  Circle,
  createListCollection,
  Fieldset,
  Float,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  Separator,
  Tabs,
} from '@chakra-ui/react';
import { LuSettings, LuShieldQuestion } from 'react-icons/lu';
import { Radio, RadioGroup } from '@/components/ui/radio';
import { Checkbox } from '../components/ui/checkbox';
const frameworks = createListCollection({
  items: [
    { label: 'React.js', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
  ],
});
const NewForm = () => {
  return (
    <Tabs.Root defaultValue="questions">
      <Tabs.List>
        <Tabs.Trigger value="questions">
          <LuShieldQuestion />
          Questions
        </Tabs.Trigger>
        <Tabs.Trigger value="responses" position={'relative'}>
          <Float placement={'middle-end'}>
            <Circle size="4" bg="#EF5DA8" color="white" fontSize={10} colorPalette="blue">
              3
            </Circle>
          </Float>
          {/* <LuFolder /> */}
          Responses
        </Tabs.Trigger>
        <Tabs.Trigger value="settings">
          <LuSettings />
          Settings
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="questions">
        <Card.Root width="800px" m={'0 auto'} mb={4} shadow={'lg'}>
          <Badge position={'absolute'} right={2} top={2} variant="solid" colorPalette="blue">
            New
          </Badge>
          <Card.Body gap="2">
            <Card.Title
              mb={2}
              fontSize={'4xl'}
              _before={{
                content: `''`,
                position: 'absolute',
                top: '0px',
                left: '-10px',
                width: '6px',
                height: '100%',
                background: 'linear-gradient(#3877EE, #EF5DA8)',
              }}>
              Title
            </Card.Title>
            <Separator />
            <Card.Description>Form description</Card.Description>
          </Card.Body>
        </Card.Root>
        <Card.Root width="800px" m={'0 auto'} mb={4}>
          <Card.Body gap="2">
            <Card.Title>Title</Card.Title>
            <RadioGroup>
              <Radio value="1">Option 1</Radio>
            </RadioGroup>
          </Card.Body>
        </Card.Root>
        <Card.Root width="800px" m={'0 auto'}>
          <Card.Body gap="2">
            <Card.Title>Title</Card.Title>

            <Fieldset.Root>
              <CheckboxGroup defaultValue={['react']} name="framework">
                <Fieldset.Legend fontSize="sm" mb="2">
                  Select framework
                </Fieldset.Legend>
                <Fieldset.Content>
                  <Checkbox value="react">React</Checkbox>
                  <Checkbox value="svelte">Svelte</Checkbox>
                  <Checkbox value="vue">Vue</Checkbox>
                  <Checkbox value="angular">Angular</Checkbox>
                </Fieldset.Content>
              </CheckboxGroup>
            </Fieldset.Root>
          </Card.Body>
        </Card.Root>
        <Card.Root width="800px" m={'0 auto'} mt={4}>
          <Card.Body gap="2">
            <Card.Title>Title</Card.Title>

            <SelectRoot collection={frameworks} size="sm" width="320px">
              <SelectLabel>Select framework</SelectLabel>
              <SelectTrigger>
                <SelectValueText placeholder="Select movie" />
              </SelectTrigger>
              <SelectContent>
                {frameworks.items.map((movie) => (
                  <SelectItem item={movie} key={movie.value}>
                    {movie.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          </Card.Body>
        </Card.Root>
      </Tabs.Content>
      <Tabs.Content value="responses">statistics</Tabs.Content>3
      <Tabs.Content value="settings">Manage your tasks for freelancers</Tabs.Content>
    </Tabs.Root>
  );
};

export default NewForm;
