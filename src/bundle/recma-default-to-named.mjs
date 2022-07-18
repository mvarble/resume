export default function recmaDefaultToNamed({ exportName }) {
  return tree => {
    tree.body.forEach(node => {
      if (node.type !== 'ExportDefaultDeclaration') {
        return;
      }
      Object.assign(node, {
        type: 'ExportNamedDeclaration',
        specifiers: [],
        declaration: {
          type: 'VariableDeclaration',
          kind: 'const',
          declarations: [
            { 
              type: 'VariableDeclarator', 
              id: { type: 'Identifier', name: exportName },
              init: { type: 'Identifier', name: node.declaration.name },
            },
          ],
        },
      });
    });
  }
}
