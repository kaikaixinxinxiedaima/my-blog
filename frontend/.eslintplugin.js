module.exports.rules = {
  'jsx-uses-vars': {
    create(context) {
      // Preventing vue's CreateElement being treated as unused
      function visitParams(params) {
        params.forEach(param => {
          if (
            param.typeAnnotation &&
            param.typeAnnotation.typeAnnotation &&
            param.typeAnnotation.typeAnnotation.typeName &&
            param.typeAnnotation.typeAnnotation.typeName.name ===
              'CreateElement'
          ) {
            context.markVariableAsUsed(param.name)
          }
        })
      }
      return {
        // Preventing jsx/tsx tags being treated as unused
        JSXOpeningElement(node) {
          if (node.name.name) {
            const variable = node.name.name
            context.markVariableAsUsed(variable)
          }
        },
        FunctionDeclaration(node) {
          if (node.params) visitParams(node.params)
        },
        'MethodDefinition > FunctionExpression'(node) {
          if (node.params) visitParams(node.params)
        },
      }
    },
  },
}
