const { mergeConfig } = require('vite');

module.exports = {
    stories: ['../src/**/*.stories.@(jsx)'],
    core: {
        disableTelemetry: true
    },
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    viteFinal: async (config) => {
        return mergeConfig(config, {
            plugins: []
        });
    }
};
