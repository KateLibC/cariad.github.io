#!/bin/sh

jekyll build
cp -R _site/* ../cariad.github.io/
git add *
git commit -m "$1"
git push
cd ../cariad.github.io/
git add *
git commit -m "$1"
git push
cd ../cariad.keigher.ca