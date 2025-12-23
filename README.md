# MiniCloudModels

See https://github.com/Nan0416/mini-cloud

## NPM

https://www.npmjs.com/package/@ultrasa/mini-cloud-models

### How to release

The package uses Github Action (.github/workflows/release.yml) to build and release the artifact to [the public NPM repository](https://www.npmjs.com/package/@ultrasa/mini-cloud-models
). The Github Action uses npmjs.com's Trusted publishing mechanism for authentication and authorization. The github repository has been registered in the npm repository's trusted publisher.

Inside the Github Action, it uses [semantic-release](https://semantic-release.gitbook.io/semantic-release/recipes/ci-configurations/github-actions#.github-workflows-release.yml-configuration-for-node-projects) to bump the version and manage tags. See `release.config.js` file.