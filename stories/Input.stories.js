import { ref } from 'vue';
import Input from './Input.vue';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'date', 'time'],
    },
    placeholder: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A text input component with support for various input types, validation states, and helper text.',
      },
    },
  },
};

export const Basic = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your name',
  },
};

export const Email = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'your@email.com',
    helperText: 'We will never share your email address.',
  },
};

export const Password = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    helperText: 'Must be at least 8 characters long.',
  },
};

export const WithError = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    error: 'Username is already taken.',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
};

export const Required = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
  },
};

export const Number = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: 'Enter your age',
  },
};

export const Date = {
  args: {
    label: 'Date of Birth',
    type: 'date',
  },
};

export const AllVariants = {
  render: () => ({
    components: { Input },
    setup() {
      return {
        formData: ref({
          name: '',
          email: '',
          password: '',
          age: '',
        }),
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 400px;">
        <Input 
          v-model="formData.name"
          label="Full Name" 
          placeholder="Enter your name"
          helperText="This is your full legal name"
        />
        <Input 
          v-model="formData.email"
          label="Email" 
          type="email"
          placeholder="your@email.com"
        />
        <Input 
          v-model="formData.password"
          label="Password" 
          type="password"
          placeholder="Enter a secure password"
          required
        />
        <Input 
          v-model="formData.age"
          label="Age" 
          type="number"
          placeholder="Enter your age"
        />
      </div>
    `,
  }),
};

export const Form = {
  render: () => ({
    components: { Input },
    setup() {
      const formData = ref({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: '',
      });
      
      const errors = ref({});

      const validateForm = () => {
        errors.value = {};
        if (!formData.value.username) {
          errors.value.username = 'Username is required';
        }
        if (!formData.value.email) {
          errors.value.email = 'Email is required';
        }
        if (!formData.value.password) {
          errors.value.password = 'Password is required';
        }
        if (formData.value.password !== formData.value.confirmPassword) {
          errors.value.confirmPassword = 'Passwords do not match';
        }
      };

      const handleSubmit = () => {
        validateForm();
        if (Object.keys(errors.value).length === 0) {
          alert('Form submitted successfully!');
        }
      };

      return {
        formData,
        errors,
        handleSubmit,
      };
    },
    template: `
      <form @submit.prevent="handleSubmit" style="max-width: 400px;">
        <h2>Sign Up Form</h2>
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <Input 
            v-model="formData.username"
            label="Username" 
            placeholder="Choose a username"
            :error="errors.username"
            required
          />
          <Input 
            v-model="formData.email"
            label="Email Address" 
            type="email"
            placeholder="your@email.com"
            :error="errors.email"
            required
          />
          <Input 
            v-model="formData.password"
            label="Password" 
            type="password"
            placeholder="Create a strong password"
            :error="errors.password"
            required
          />
          <Input 
            v-model="formData.confirmPassword"
            label="Confirm Password" 
            type="password"
            placeholder="Re-enter your password"
            :error="errors.confirmPassword"
            required
          />
          <Input 
            v-model="formData.age"
            label="Age" 
            type="number"
            placeholder="Enter your age"
          />
          <button type="submit" style="padding: 0.75rem; background: #595ab9; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">
            Sign Up
          </button>
        </div>
      </form>
    `,
  }),
};
