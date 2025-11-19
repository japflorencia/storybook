import Badge from './Badge.vue';

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'info'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A versatile badge component for labels, status indicators, and tags.',
      },
    },
  },
};

export const Primary = {
  args: {
    label: 'Primary',
    variant: 'primary',
    size: 'medium',
  },
};

export const Success = {
  args: {
    label: 'Success',
    variant: 'success',
    size: 'medium',
  },
};

export const Warning = {
  args: {
    label: 'Warning',
    variant: 'warning',
    size: 'medium',
  },
};

export const Danger = {
  args: {
    label: 'Danger',
    variant: 'danger',
    size: 'medium',
  },
};

export const Info = {
  args: {
    label: 'Info',
    variant: 'info',
    size: 'medium',
  },
};

export const Sizes = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Badge label="Small" size="small" variant="primary" />
        <Badge label="Medium" size="medium" variant="primary" />
        <Badge label="Large" size="large" variant="primary" />
      </div>
    `,
  }),
};

export const AllVariants = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <Badge label="Primary" variant="primary" />
        <Badge label="Success" variant="success" />
        <Badge label="Warning" variant="warning" />
        <Badge label="Danger" variant="danger" />
        <Badge label="Info" variant="info" />
      </div>
    `,
  }),
};
