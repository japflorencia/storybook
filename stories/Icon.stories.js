import Icon from './Icon.vue';

export default {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Icon name from RPG Awesome (without ra- prefix)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
    },
    color: {
      control: 'color',
    },
    spin: {
      control: 'boolean',
    },
    flip: {
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Flexible icon component with RPG Awesome integration. Supports 100+ gaming-themed icons with customizable size, color, and animations.',
      },
    },
  },
};

export const Heart = {
  args: {
    name: 'heart',
    size: 'large',
    color: '#ff6b6b',
  },
};

export const Sword = {
  args: {
    name: 'sword',
    size: 'large',
    color: '#595959',
  },
};

export const Shield = {
  args: {
    name: 'shield',
    size: 'large',
    color: '#4ecdc4',
  },
};

export const Gem = {
  args: {
    name: 'gem',
    size: 'large',
    color: '#a29bfe',
  },
};

export const Flame = {
  args: {
    name: 'flame',
    size: 'large',
    color: '#ff7675',
  },
};

export const Spinning = {
  args: {
    name: 'hourglasses',
    size: 'large',
    color: '#fdcb6e',
    spin: true,
  },
};

export const AllSizes = {
  render: (args) => ({
    components: { Icon },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; gap: 2rem; align-items: center;">
        <Icon name="heart" size="small" color="#ff6b6b" />
        <Icon name="heart" size="medium" color="#ff6b6b" />
        <Icon name="heart" size="large" color="#ff6b6b" />
        <Icon name="heart" size="xlarge" color="#ff6b6b" />
      </div>
    `,
  }),
};

export const IconPlayground = {
  args: {
    name: 'heart',
    size: 'large',
    color: '#ff6b6b',
    spin: false,
    flip: false,
  },
};

export const CommonIcons = {
  render: () => ({
    components: { Icon },
    template: `
      <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 2rem; padding: 2rem;">
        <div style="text-align: center;">
          <Icon name="heart" size="large" color="#ff6b6b" />
          <p>heart</p>
        </div>
        <div style="text-align: center;">
          <Icon name="sword" size="large" color="#595959" />
          <p>sword</p>
        </div>
        <div style="text-align: center;">
          <Icon name="shield" size="large" color="#4ecdc4" />
          <p>shield</p>
        </div>
        <div style="text-align: center;">
          <Icon name="gem" size="large" color="#a29bfe" />
          <p>gem</p>
        </div>
        <div style="text-align: center;">
          <Icon name="flame" size="large" color="#ff7675" />
          <p>flame</p>
        </div>
        <div style="text-align: center;">
          <Icon name="wand" size="large" color="#74b9ff" />
          <p>wand</p>
        </div>
        <div style="text-align: center;">
          <Icon name="crown" size="large" color="#fdcb6e" />
          <p>crown</p>
        </div>
        <div style="text-align: center;">
          <Icon name="skull" size="large" color="#6c5ce7" />
          <p>skull</p>
        </div>
        <div style="text-align: center;">
          <Icon name="book" size="large" color="#00b894" />
          <p>book</p>
        </div>
        <div style="text-align: center;">
          <Icon name="ring" size="large" color="#e17055" />
          <p>ring</p>
        </div>
      </div>
    `,
  }),
};
