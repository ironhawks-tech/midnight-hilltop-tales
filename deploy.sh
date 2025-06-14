
#!/bin/bash

# Build the project
npm run build

# Navigate to the build output directory
cd dist

# Initialize git if not already done
git init

# Add all files
git add -A

# Commit changes
git commit -m 'Deploy to GitHub Pages'

# Push to gh-pages branch
git push -f git@github.com:yourusername/your-repo-name.git main:gh-pages

cd ..
