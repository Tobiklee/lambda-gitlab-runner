import * as path from 'path';
import { DockerImageCode, DockerImageFunction } from 'aws-cdk-lib/aws-lambda';
import { DockerImageFunctionProps } from 'aws-cdk-lib/aws-lambda/lib/image-function';
import { Construct } from 'constructs';

/**
 * Selection of premade docker files
 */
export enum DockerFile {
  NODE_14 = 'node14.Dockerfile'
}

export interface LambdaRunnerConfiguration {
  /**
   * Gitlab - Url  from gitlab installation.
   * @example gitlab.com
   *
   * Is only used if --context gitlab-url is undefined.
   */
  readonly gitlabUrl?: string;

  /**
   * Runner token needed connect to gitlab instance.
   *
   * Is only used if --context runner-token is undefined.
   */
  readonly runnerToken?: string;

  /**
   * Select a default docker file.
   */
  readonly dockerFile?: DockerFile;

  /**
   * Additional function props. Overwrite defaults.
   *
   * You probably want to use your own docker image instead of the default one.
   * Use the default docker image as a reference.
   */
  readonly functionProps?: DockerImageFunctionProps;
}

export class LambdaRunner extends Construct {
  constructor(scope: Construct, id: string, props?: LambdaRunnerConfiguration) {
    super(scope, id);

    const gitlabUrl = this.node.tryGetContext('gitlab-url') ?? props?.gitlabUrl;
    const runnerToken = this.node.tryGetContext('runner-token') ?? props?.runnerToken;

    if (!gitlabUrl || !runnerToken) {
      throw new Error('Context variable [gitlab-url] or [runner-token] is missing.');
    }

    new DockerImageFunction(this, 'LambdaGitlabExecutor', {
      functionName: 'LambdaGitlabExecutor',
      code: DockerImageCode.fromImageAsset(path.join(__dirname), { file: props?.dockerFile ?? DockerFile.NODE_14 }),
      memorySize: 4096,
      ...props?.functionProps,
      environment: {
        GITLAB_URL: gitlabUrl,
        RUNNER_TOKEN: runnerToken,
        ...props?.functionProps?.environment,
      },
    });

  }
}
