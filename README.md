# node-serverless-base

## Setup
```
export AWS_ACCESS_KEY_ID=<your-key-here>
export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>
```
## Get Dependencies
```
yarn
```
## Serverless (run from the same folder as serverless.yaml)
### Deploy
```
serverless deploy
```

### Teardown
```
serverless remove
```

## Test
- build docker: `./run_build.sh`
- unit: `./run_unit_tests.sh`
- acceptance: `./run_acceptance_tests.sh`
- both: `./run_tests.sh`
