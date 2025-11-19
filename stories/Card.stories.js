import Card from './Card.vue';
import Button from './Button.vue';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    flat: {
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A container component for organizing content with optional header and footer sections.',
      },
    },
  },
};

export const Basic = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <p>This is a basic card component with some content inside.</p>
      </Card>
    `,
  }),
};

export const WithHeader = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <template #header>
          Card Title
        </template>
        <p>This card has a header section at the top.</p>
      </Card>
    `,
  }),
};

export const WithHeaderAndFooter = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <template #header>
          Card Title
        </template>
        <p>This is the card content with both header and footer.</p>
        <p>You can place any content here that you want to display.</p>
        <template #footer>
          <button style="padding: 0.5rem 1rem; background: #595ab9; color: white; border: none; border-radius: 4px; cursor: pointer;">Close</button>
          <button style="padding: 0.5rem 1rem; background: #ecf0f1; color: #333; border: none; border-radius: 4px; cursor: pointer;">Cancel</button>
        </template>
      </Card>
    `,
  }),
};

export const Flat = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card flat>
        <template #header>
          Flat Card
        </template>
        <p>This is a flat card with minimal shadow.</p>
      </Card>
    `,
  }),
  args: {
    flat: true,
  },
};

export const Grid = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
        <Card>
          <template #header>Feature 1</template>
          <p>Fast and responsive</p>
        </Card>
        <Card>
          <template #header>Feature 2</template>
          <p>Easy to customize</p>
        </Card>
        <Card>
          <template #header>Feature 3</template>
          <p>Production ready</p>
        </Card>
      </div>
    `,
  }),
};
