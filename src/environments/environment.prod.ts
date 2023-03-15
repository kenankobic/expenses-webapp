import packageJson from '../../package.json';

export const environment = {
    production: true,
    useMockServer: false,
    apiContext: '/api',
    basicAuthKey: 'todo',
    version: packageJson.version
};