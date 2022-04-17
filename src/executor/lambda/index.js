import { exec } from 'child_process';

/**
 * Executes a shell command and return it as a Promise.
 * @param cmd {string}
 * @return {Promise<string>}
 */
function execute(cmd) {
  return new Promise((resolve) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
}

/**
 * Executes gitlab-runner single run
 */
export const handler = async () => {
  const gitlabUrl = process.env.GITLAB_URL;
  const runnerToken = process.env.RUNNER_TOKEN;
  const result = await execute(`
  gitlab-runner run-single
  -u ${gitlabUrl}
  -t ${runnerToken}
  --executor shell
  --builds-dir /tmp/builds
  --cache-dir /tmp/cache
  --max-builds 1
  --wait-timeout 1
  `);
  console.log(result);
};
