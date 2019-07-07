# eslint-config-mrhen
An extremely opinionated ESLint config

## Motivation

There are already a handful of high-quality existing configurations. Notably: [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb), [eslint-config-xo](https://github.com/xojs/eslint-config-xo/) and [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard). Why make another config?

### Protect meaningful visual shape

Reading and scanning code quickly requires a meaningful visual shape. This is especially true if you are in a position where you need to context switch between multiple languages throughout a single day or week of work.

One of the most important things to detect quickly is complexity. Aligning visual shape with code that increases complexity makes it much easier to hunt down problematic areas in a codebase.

Many lint rules allow code to break the visual flow or do not enforce a consistent shape.

#### Examples

```js
[1,2,3].map((i) => { return i; }); // A

[1,2,3].map((i) => { // B
    return i;
});
```

A `return` statement being on its own line makes it easier to detect that a function exists by forcing indentation to appear in the visual flow. While keyword highlighting can make the `return` statement pop, the extra line with its indentation means you only need to look at the whitespace to quickly notice the hidden complexity contained in the callback.

----

```js
// A
function render() {
    const showContent = true;

    return (
        <Outer>
            {showContent && <Content />}
        </Outer>
    );
}

// B
function render() {
    const showContent = true;

    return (
        <Outer>
            {showContent && (
                <Content />
            )}
        </Outer>
    );
}
```

Two things are accomplished by moving `<Content />` to its own line. First, the branching logic of `showContent` is now highlighted by the whitespace indentation. Second, having JSX opening tags on their own line makes for easy scanning of the layout hierarchy.

----

```js
// A
function doFoo() {
    const a = 'a';
    const b = 'b';
    const c = 'c';



    const d = 'd';
    const e = 'e';


    const f = 'f';
}

// B
function doFoo() {
    const a = 'a';
    const b = 'b';
    const c = 'c';

    const d = 'd';
    const e = 'e';

    const f = 'f';
}
```

Extraneous blank lines hurt readability by signaling an important syntactical element. JavaScript uses curly braces to denote scope blocks and, therefore, more than one blank line is rarely needed. Python does _not_, however, so [multiple blank lines](https://www.python.org/dev/peps/pep-0008/#blank-lines) are used to signal differences between areas in code.

Rapidly switching between JavaScript and Python is hard enough already. Unnecessary and meaningless blank lines make it harder.

#### Related rules

* [curly](https://eslint.org/docs/rules/curly)
* [dot-location](https://eslint.org/docs/rules/dot-location)

### Consistency over being concise

There are a lot of different ways to write the same functional code. Most styles let the author choose the pattern appropriate for the circumstance. This config deliberately limits things to the most readable variant that still covers the majority of situations. It pushes back against the temptation to reduce line count for the sake of brevity -- it is often more readable to leave it in a more verbose form.

#### Examples

```js
[1,2,3].map(i => i);   // A

[1,2,3].map((i) => i); // B

[1,2,3].map((i) => { return i; }); // C

[1,2,3].map((i) => {   // D
    return i;
});
```

Option (D) is three times longer than (A) but it only works in a particular scenario. It is better to have the same visual shape for code that behaves the same:

```js
[1,2,3].map((i) => {   // D.1
    return i;
});

[1,2,3].map((i) => {   // D.2
    const foo = i;
    return foo * foo;
});
```

----

```js
const { foo } = this; // A.1

const {
    foo,
} = this; // B.1
```

Option (B) is three times longer but at some point (A) crams too many declarations into one line:

```js
const { alfa, beta, charlie, delta, echo, foxtrot, golf, hotel } = this; // A.2

const {
    alfa,
    beta,
    charlie,
    delta,
    echo,
    foxtrot,
    golf,
    hotel,
} = this; // B.2
```

Since (B.2) is preferable over (A.2), (B.1) is preferable over (A.1).

### Avoid surprises

Don't be clever. Code that requires lots of comments or documentation tends to be overly complicated. Code that is dense or uses too much syntactic sugar is hard to read and can lead to results that surprise the reader.

#### Examples

```js
// A
const foo = alfa ? 1 : beta ? charlie ? 1000 : 100 : 0;

// B
let foo;
if (alfa) {
    foo = 1;
} else if (beta) {
    if (charlie) {
        foo = 1000
    } else {
        foo = 100;
    }
} else {
    foo = 0;
}
```

Ternaries are notoriously difficult to read and nested ternaries are all-around terrible.

----

```js
function doFoo(numbers) {
    for (const number in numbers) {
        switch(number) {
            case 0:
                console.log('Zero');
                break;
            case 1:
                console.log('One');
                break;
            case 2:
                console.log('Two');
                break;
            case 3:
                console.log('Three');
                return;
            case 4:
                console.log('Four');
                break;
            case 5:
                console.log('Five');
                break;
            default:
                console.log('More than Five');
        }
    }
}
```

Code branches should act like other nearby code branches. If a branch has special logic or behavior it should be immediately obvious. (Sadly, there is no rule currently checking for the above scenario.)

#### Related rules

* [`consistent-return`](https://eslint.org/docs/rules/consistent-return)

### Optimize for common scenarios

ESLint provides easy ways to mark lines of code as exceptions. Not every lint error will be completely accurate -- that does not mean the rule should be unused. That means the rule *should* be used and the exceptions marked with an explanation.

## Rules

Below is an explanation of why each rule was adopted and examples of when it matters.
