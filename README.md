# node-serverless-base

## Dependancies
- yarn (https://yarnpkg.com/en/docs/install#mac-stable)
- serverless (https://serverless.com/framework/docs/getting-started/)

## setup
```
export AWS_ACCESS_KEY_ID=<your-key-here>
export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>
```
## Node dependancies
```
yarn
```
## Serverless (run from the same folder as serverless.yaml)
### Deploy
```
yarn deploy
```

### Teardown
```
yarn remove
```

## Test
```
yarn test
yarn acceptance-test
```
