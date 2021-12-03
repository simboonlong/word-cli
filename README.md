[![CI/CD](https://github.com/simboonlong/word-cli/actions/workflows/manual.yml/badge.svg)](https://github.com/simboonlong/word-cli/actions/workflows/manual.yml) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Word CLI

Command line interface to get useful information from a chunk of text.

## Install

```
npm i -g @simboonlong/word-cli
```

or

```
npx -p @simboonlong/word-cli word <command> <arguments>
```

<!-- npx -p @simboonlong/word-cli word count 'foobar in hello world!' -->

## Count

Count total words.

```
word count 'foobar in hello world!'
```

Count total characters.

```
word count 'foobar in hello world!' --char
```

<!-- npm run dev -- count 'foobar in hello world!' --char -->
