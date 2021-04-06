const code = require("@actions/core");
const github = require("@actions/github");

async function run(){
    const issueTitle = core.getInput("issue-title");
    const jokeBody = core.getInput("joke");
    const token = core.getInput("repo-token");
    const octoKit = github.getOctokit(token);
    const newIssue = await octoKit.issues.create({
        repo:github.context.repo.repo,
        owner:github.context.repo.owner,
        title:issueTitle,
        body: jokeBody,
    });
    try{}catch(err){
        core.setFailed("Error ${err}");
    }
}

run();