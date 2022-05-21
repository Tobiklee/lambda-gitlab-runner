const {
  awscdk,
  Task,
} = require('projen');
const {
  NodePackageManager,
  NpmAccess,
} = require('projen/lib/javascript');

const cdkVersion = '2.20.0';

const project = new awscdk.AwsCdkConstructLibrary({
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
    'gitlab',
    'lambda',
    'runner',
    'executor',
  ],

  packageManager: NodePackageManager.NPM,
  npmAccess: NpmAccess.PUBLIC,

  cdkVersionPinning: false,

  releaseToNpm: true,
  release: {
    releaseEveryCommit: true,
  },

  gitignore: [
    '.idea',
  ],
});
project.addTask('postinstall', {
  exec: 'ls -la && mkdir -p lib/executor && cp src/executor/*.Dockerfile lib/executor',
});
project.synth();
