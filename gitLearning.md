# Git workflow

Very useful when working with a team to keep the local repository up to date with the remote repository and to share changes with others.

## Setup

- `git init` – initialize the project
- `git remote add origin <repository-url>` – link the local repository to the remote repository

## Common commands

- `git add .` – stage all changes
- `git commit -m "commit message"` – commit the changes with a message
- `git push` – push committed changes to the remote
- `git pull` – pull latest changes from the remote
- `git status` – check repository status
- `git log` – view commit history
- `git branch` – list branches
- `git checkout <branch-name>` – switch to a branch
- `git checkout -b <branch-name>` – create and switch to a new branch

### Useful examples

- `git push origin main` – push changes to the `main` branch on the remote
- `git pull origin main` – pull latest changes from the `main` branch
- `git reset --hard HEAD~1` – undo the last commit (use with caution)
- `git reset --hard HEAD~2` – undo the last two commits (use with caution)
- `git revert <commit-hash>` – create a new commit that undoes a specific commit
- `git reset --soft HEAD~1` – undo the last commit but keep the changes staged
