type Tree = number | {
    operation: string;
    left: Tree;
    right: Tree;
}

const operators = ['+', '-', '*', '/'];

function generateTree(tokens: string[]): { tree: Tree, restTokens: string[] } {
    let firstToken = tokens[0];
    let restTokens = tokens.slice(1);

    if (!operators.includes(firstToken)) return {
        tree: Number(firstToken),
        restTokens
    }

    const left = generateTree(restTokens);
    const right = generateTree(left.restTokens);

    return {
        tree: {
            operation: firstToken,
            left: left.tree,
            right: right.tree
        },
        restTokens: right.restTokens
    }
}

function processTree(tree: Tree) {
    if (typeof tree === 'number') return tree;

    switch (tree.operation) {
        case '+':
            return processTree(tree.left) + processTree(tree.right);
        case '-':
            return processTree(tree.left) - processTree(tree.right);
        case '*':
            return processTree(tree.left) * processTree(tree.right);
        case '/':
            return processTree(tree.left) / processTree(tree.right);

    }
}

function evaluate(expression: string) {
    const tokens = expression.split(' ');

    const tree = generateTree(tokens).tree;

    return processTree(tree);
}

console.log(evaluate('/ + 2 3 - 6 1'));