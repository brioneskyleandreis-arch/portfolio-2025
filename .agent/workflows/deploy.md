---
description: Deploy changes to production
---

# Deploy Changes

This workflow guides you through deploying your changes to Vercel via GitHub.

1.  **Check Status**: Ensure you are on the correct branch and review changes.
    ```bash
    git status
    ```

2.  **Stage Changes**: Add your changes to the staging area.
    ```bash
    git add .
    ```

3.  **Commit Changes**: Save your changes with a descriptive message.
    ```bash
    git commit -m "Update site content"
    ```

4.  **Push to GitHub**: Send your changes to the remote repository. Vercel will automatically trigger a deployment.
    ```bash
    // turbo
    git push
    ```

5.  **Verify**: Visit your Vercel dashboard or live site to check the update.
