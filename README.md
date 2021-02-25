# github-ci-cd-nimbella-shortener
A Shortener(example) project written on Node.js & React.js to showcase CI/CD on Nimbella using GitHub Actions  

GitHub Secret
Create below mentioned GitHub Secrets and update the value accordingly
DEPLOYER_LOGIN_TOKEN=Nimbella's Login Token
PROD_BASE_URL=https://Your NimbellaNamespace+-apigcp.nimbella.io/api/s/url
PROD_DB_CLUSTERURI=MongoDB Cluster URI for PROD
PROD_DB_NAME=Name of MongoDB instance
PROD_DB_PASSWORD=Password of MongoDB Instance
PROD_DB_USERNAME=UserName of MongoDB Instance

TEST_BASE_URL=https://Your NimbellaNamespace+-apigcp.nimbella.io/api/s/url
TEST_DB_CLUSTERURI=MongoDB Cluster URI for Test Environment
TEST_DB_NAME=Name of MongoDB instance for Test Environment
TEST_DB_PASSWORD=Password of MongoDB Instance for Test Environment
TEST_DB_USERNAME=UserName of MongoDB Instance for Test Environment

To Deploy Shortener App using GitHub Actions on Nimbella

1.Clone the code
2.Create a New Repo and update above mentioned GitHub Secrets
3.Push the cloned code to the Newly Created Repo which will Automatically Deploy Your Shortener App on Nimbella
