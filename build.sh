#!/bin/sh

jekyll build
echo "*.py\n*.sh\n.DS_*" > _site/.gitignore
cp -R _site/* ../cariad.github.io/
git add *
git commit -m "$1"
git push --no-thin 
cd ../cariad.github.io/
git add *
git commit -m "$1"
git push --no-thin
cd ../cariad.keigher.ca