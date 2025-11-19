import { ref } from 'vue';
import Alert from './Alert.vue';

export default {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'danger', 'warning', 'info'],
    },
    title: {
      control: 'text',
    },
    message: {
      control: 'text',
    },
    dismissible: {
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A notification component for displaying alerts and messages with different types.',
      },
    },
  },
};

export const Success = {
  args: {
    type: 'success',
    title: 'Success!',
    message: 'Your operation completed successfully.',
    dismissible: true,
  },
};

export const Danger = {
  args: {
    type: 'danger',
    title: 'Error!',
    message: 'Something went wrong. Please try again later.',
    dismissible: true,
  },
};

export const Warning = {
  args: {
    type: 'warning',
    title: 'Warning!',
    message: 'Please review your input before proceeding.',
    dismissible: true,
  },
};

export const Info = {
  args: {
    type: 'info',
    title: 'Information',
    message: 'Here is some useful information you should know.',
    dismissible: true,
  },
};

export const Nondismissible = {
  args: {
    type: 'info',
    title: 'System Alert',
    message: 'This is an important system message that cannot be dismissed.',
    dismissible: false,
  },
};

export const WithoutTitle = {
  args: {
    type: 'info',
    message: 'This is an alert without a title.',
    dismissible: true,
  },
};

export const AllTypes = {
  render: () => ({
    components: { Alert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <Alert type="success" title="Success" message="Operation completed successfully." />
        <Alert type="danger" title="Error" message="Something went wrong. Please try again." />
        <Alert type="warning" title="Warning" message="Please review your input before proceeding." />
        <Alert type="info" title="Information" message="Here is some useful information." />
      </div>
    `,
  }),
};
