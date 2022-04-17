# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaRunner <a name="LambdaRunner" id="lambda-gitlab-runner.LambdaRunner"></a>

#### Initializers <a name="Initializers" id="lambda-gitlab-runner.LambdaRunner.Initializer"></a>

```typescript
import { LambdaRunner } from 'lambda-gitlab-runner'

new LambdaRunner(scope: Construct, id: string, props?: LambdaRunnerConfiguration)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lambda-gitlab-runner.LambdaRunner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#lambda-gitlab-runner.LambdaRunner.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#lambda-gitlab-runner.LambdaRunner.Initializer.parameter.props">props</a></code> | <code><a href="#lambda-gitlab-runner.LambdaRunnerConfiguration">LambdaRunnerConfiguration</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="lambda-gitlab-runner.LambdaRunner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="lambda-gitlab-runner.LambdaRunner.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="lambda-gitlab-runner.LambdaRunner.Initializer.parameter.props"></a>

- *Type:* <a href="#lambda-gitlab-runner.LambdaRunnerConfiguration">LambdaRunnerConfiguration</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#lambda-gitlab-runner.LambdaRunner.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="lambda-gitlab-runner.LambdaRunner.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#lambda-gitlab-runner.LambdaRunner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="lambda-gitlab-runner.LambdaRunner.isConstruct"></a>

```typescript
import { LambdaRunner } from 'lambda-gitlab-runner'

LambdaRunner.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="lambda-gitlab-runner.LambdaRunner.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lambda-gitlab-runner.LambdaRunner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="lambda-gitlab-runner.LambdaRunner.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### LambdaRunnerConfiguration <a name="LambdaRunnerConfiguration" id="lambda-gitlab-runner.LambdaRunnerConfiguration"></a>

#### Initializer <a name="Initializer" id="lambda-gitlab-runner.LambdaRunnerConfiguration.Initializer"></a>

```typescript
import { LambdaRunnerConfiguration } from 'lambda-gitlab-runner'

const lambdaRunnerConfiguration: LambdaRunnerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lambda-gitlab-runner.LambdaRunnerConfiguration.property.dockerFile">dockerFile</a></code> | <code><a href="#lambda-gitlab-runner.DockerFile">DockerFile</a></code> | Select a default docker file. |
| <code><a href="#lambda-gitlab-runner.LambdaRunnerConfiguration.property.functionProps">functionProps</a></code> | <code>aws-cdk-lib.aws_lambda.DockerImageFunctionProps</code> | Additional function props. Overwrite defaults. |
| <code><a href="#lambda-gitlab-runner.LambdaRunnerConfiguration.property.gitlabUrl">gitlabUrl</a></code> | <code>string</code> | Gitlab - Url  from gitlab installation. |
| <code><a href="#lambda-gitlab-runner.LambdaRunnerConfiguration.property.runnerToken">runnerToken</a></code> | <code>string</code> | Runner token needed connect to gitlab instance. |

---

##### `dockerFile`<sup>Optional</sup> <a name="dockerFile" id="lambda-gitlab-runner.LambdaRunnerConfiguration.property.dockerFile"></a>

```typescript
public readonly dockerFile: DockerFile;
```

- *Type:* <a href="#lambda-gitlab-runner.DockerFile">DockerFile</a>

Select a default docker file.

---

##### `functionProps`<sup>Optional</sup> <a name="functionProps" id="lambda-gitlab-runner.LambdaRunnerConfiguration.property.functionProps"></a>

```typescript
public readonly functionProps: DockerImageFunctionProps;
```

- *Type:* aws-cdk-lib.aws_lambda.DockerImageFunctionProps

Additional function props. Overwrite defaults.

You probably want to use your own docker image instead of the default one.
Use the default docker image as a reference.

---

##### `gitlabUrl`<sup>Optional</sup> <a name="gitlabUrl" id="lambda-gitlab-runner.LambdaRunnerConfiguration.property.gitlabUrl"></a>

```typescript
public readonly gitlabUrl: string;
```

- *Type:* string

Gitlab - Url  from gitlab installation.

---

*Example*

```typescript
gitlab.com

Is only used if --context gitlab-url is undefined.
```


##### `runnerToken`<sup>Optional</sup> <a name="runnerToken" id="lambda-gitlab-runner.LambdaRunnerConfiguration.property.runnerToken"></a>

```typescript
public readonly runnerToken: string;
```

- *Type:* string

Runner token needed connect to gitlab instance.

Is only used if --context runner-token is undefined.

---



## Enums <a name="Enums" id="Enums"></a>

### DockerFile <a name="DockerFile" id="lambda-gitlab-runner.DockerFile"></a>

Selection of premade docker files.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#lambda-gitlab-runner.DockerFile.NODE_14">NODE_14</a></code> | *No description.* |

---

##### `NODE_14` <a name="NODE_14" id="lambda-gitlab-runner.DockerFile.NODE_14"></a>

---

