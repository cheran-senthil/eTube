[![Build Status](https://travis-ci.com/Cheran-Senthil/eTube.svg?branch=master)](https://travis-ci.com/Cheran-Senthil/eTube)

# eTube

A web application to search and recommend videos within a specified range of channels for easy access.

## Dependencies

- Node.js
- Meteor
- Neo4j

## Usage

1. Create a YouTube API key by following the steps listed [here](https://developers.google.com/youtube/android/player/register)
2. Enter your API key at the variable `key` in server/main.js
3. Run the `meteor` command

## Status

This is a ground up implementation of [Video-Search-Engine](https://github.com/Cheran-Senthil/Video-Search-Engine) and is still in progress.

- [x] Load data into MongoDB
- [ ] Load data into Neo4j
- [ ] Create backend for log-in
- [ ] Implement recommendations and search engine
- [ ] Create webpages
