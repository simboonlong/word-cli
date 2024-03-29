[![CI/CD](https://github.com/simboonlong/word-cli/actions/workflows/manual.yml/badge.svg)](https://github.com/simboonlong/word-cli/actions/workflows/manual.yml)

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

## Demo

Example:

```
npx -p @simboonlong/word-cli word count 'foobar in hello world!'
```

The above word count should return 4.

---

### Count

Count total words.

```
word count 'foobar in hello world!'
```

<!-- npm run dev -- count 'foobar in hello world!' -->

Count total characters.

```
word count 'foobar in hello world!' --character
```

<!-- npm run dev -- count 'foobar in hello world!' -c -->

### Occur

Count total occurrences of word in text.

```
word occur 'foobar in hello world!' --string foobar
```

<!-- npm run dev -- occur 'foobar in hello world!' -s foobar -->

Count total occurrences of character in text.

```
word occur 'foobar in hello world!' --string l --character
```

<!-- npm run dev -- occur 'foobar in hello world!' -s l -c -->
