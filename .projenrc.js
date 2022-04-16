const { awscdk } = require('projen');
const {
  NodePackageManager,
  NpmAccess,
} = require('projen/lib/javascript');

const cdkVersion = '2.20.0';

const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion,
  defaultReleaseBranch: 'master',
  name: 'lambda-gitlab-runner',

  description: 'Serverless Gitlab - Runner utilizing AWS Lambda.',
  repository: 'https://github.com/Tobiklee/lambda-gitlab-runner.gitpnp',

  licensed: true,
  license: 'Apache-2.0',

  authorName: 'Tobias Kleemann',

  stability: 'experimental',
  keywords: [
    'cdk',
    'constructs',
    'serverless',
    'quirion',
    'swagger',
    'gateway',
    'lambda',
    'website',
    'dynamo',
    'microservice',
  ],

  packageManager: NodePackageManager.PNPM,
  npmAccess: NpmAccess.PUBLIC,

  cdkVersionPinning: false,

  releaseToNpm: false,
  release: {
    releaseEveryCommit: true,
  },

  gitignore: [
    '.idea',
  ],

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();