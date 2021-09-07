import mockClients from '../fixtures/mockClients.json';
import mockUser from '../fixtures/mockUser.json';

  export const hasOperationName = (req, operationName) => {
    const { body } = req;
    return body.hasOwnProperty('query') && body.query.includes(operationName);
  };
  
  // Alias query if operationName matches
  export const aliasClientsQuery = (req, operationName) => {
    if (hasOperationName(req, operationName)) {
      req.reply((res) => {
        res.body.data = mockClients;
      });
            req.alias = `gql${operationName}Query`
    }
  };


  
  // Alias mutation if operationName matches
  export const aliasMutation = (req, operationName) => {
    if (hasOperationName(req, operationName)) {
      req.alias = `gql${operationName}Mutation`
    }
  }